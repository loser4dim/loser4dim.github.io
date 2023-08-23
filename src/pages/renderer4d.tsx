import styles from "@/styles/Renderer.module.css"

import { useEffect } from "react";

import {mat4, vec3} from "gl-matrix";

import Head  from "next/head";

const cubeVertexSize = 4 * 8; // Byte size of one vertex.
const cubePositionOffset = 4 * 0;
const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.
const cubeVertexCount = 36;

export const cubeVertexArray = new Float32Array([
  // float4 position, float4 color
  1, -1, 1, 1,   1, 0, 1, 1,
  -1, -1, 1, 1,  0, 0, 1, 1,
  -1, -1, -1, 1, 0, 0, 0, 1,
  1, -1, -1, 1,  1, 0, 0, 1,
	1, -1, 1, 1,   1, 0, 1, 1,
  -1, -1, -1, 1, 0, 0, 0, 1,

  1, 1, 1, 1,    1, 1, 1, 1,
  1, -1, 1, 1,   1, 0, 1, 1,
  1, -1, -1, 1,  1, 0, 0, 1,
  1, 1, -1, 1,   1, 1, 0, 1,
  1, 1, 1, 1,    1, 1, 1, 1,
  1, -1, -1, 1,  1, 0, 0, 1,

  -1, 1, 1, 1,   0, 1, 1, 1,
  1, 1, 1, 1,    1, 1, 1, 1,
  1, 1, -1, 1,   1, 1, 0, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,
  -1, 1, 1, 1,   0, 1, 1, 1,
  1, 1, -1, 1,   1, 1, 0, 1,

  -1, -1, 1, 1,  0, 0, 1, 1,
  -1, 1, 1, 1,   0, 1, 1, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,
  -1, -1, -1, 1, 0, 0, 0, 1,
  -1, -1, 1, 1,  0, 0, 1, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,

  1, 1, 1, 1,    1, 1, 1, 1,
  -1, 1, 1, 1,   0, 1, 1, 1,
  -1, -1, 1, 1,  0, 0, 1, 1,
  -1, -1, 1, 1,  0, 0, 1, 1,
  1, -1, 1, 1,   1, 0, 1, 1,
  1, 1, 1, 1,    1, 1, 1, 1,

  1, -1, -1, 1,  1, 0, 0, 1,
  -1, -1, -1, 1, 0, 0, 0, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,
  1, 1, -1, 1,   1, 1, 0, 1,
  1, -1, -1, 1,  1, 0, 0, 1,
  -1, 1, -1, 1,  0, 1, 0, 1,
]);


const quadIndexArray = new Uint16Array([0, 1, 2, 0, 2, 3]);

const vertex_shader_source_code = `
struct Uniforms {
  projectionMatrix : mat4x4<f32>,
  viewMatrix : mat4x4<f32>,
  worldMatrix : mat4x4<f32>,
}
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct VertexOutput {
  @builtin(position) Position : vec4<f32>,
  @location(0) fragColor : vec4<f32>,
}

@vertex
fn main(
  @location(0) position: vec4<f32>,
  @location(1) color: vec4<f32>
) -> VertexOutput {

	var output : VertexOutput;
	output.Position = uniforms.projectionMatrix * uniforms.viewMatrix * uniforms.worldMatrix * position;
  output.fragColor = color;
  
  return output;
}
`;

const fragment_shader_source_code = `
@fragment
fn main(
  @location(0) fragColor: vec4<f32>,
) -> @location(0) vec4<f32> {
  return fragColor;
}
`;

const initializeRenderer = async(canvas: HTMLCanvasElement): Promise<{context: GPUCanvasContext, logical_device: GPUDevice, pipeline: GPURenderPipeline, verticesBuffer: GPUBuffer, indicesBuffer: GPUBuffer, uniformBindGroup: GPUBindGroup, uniformBuffer: GPUBuffer, depthTexture: GPUTexture}> => {
  const context = canvas.getContext("webgpu") as GPUCanvasContext;
  if(!context) {
    throw new Error("Not Found Context");
  };

  const physical_device = await navigator.gpu.requestAdapter();
  if(!physical_device) {
    throw new Error("Not Found Physical Device");
  };

  const logical_device = await physical_device!.requestDevice();
  if(!logical_device) {
    throw new Error("Not Found Logical Device");
  };

  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
  
  context.configure(
    {
      device   : logical_device,
      format   : presentationFormat,
      alphaMode: 'opaque',
    }
  );
  const pipeline = logical_device.createRenderPipeline({
    layout: 'auto',
    vertex: {
      module: logical_device.createShaderModule({
        code: vertex_shader_source_code,
      }),
      entryPoint: 'main',
      buffers: [
        {
          // 配列の要素間の距離をバイト単位で指定します。
          arrayStride: cubeVertexSize,

          // 頂点バッファの属性を指定します。
          attributes: [
            {
              // position
              shaderLocation: 0, // @location(0) in vertex shader
              offset: cubePositionOffset,
              format: 'float32x4',
            },
            {
              // color
              shaderLocation: 1, // @location(1) in vertex shader
              offset: cubeColorOffset,
              format: 'float32x4',
            },
          ],
        },
      ],
    },
    fragment: {
      module: logical_device.createShaderModule({
        code: fragment_shader_source_code,
      }),
      entryPoint: 'main',
      targets: [
        // 0
        { // @location(0) in fragment shader
          format: presentationFormat,
        },
      ],
    },
    primitive: {
      topology: 'triangle-list',
    },
    depthStencil: {
      depthWriteEnabled: true,
      depthCompare: 'less',
      format: 'depth24plus',
    },
  });

  const uniformBufferSize = 4 * 16 * 3; // 4x4 matrix * 3
  const uniformBuffer = logical_device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  const uniformBindGroup = logical_device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 0,
        resource: {
          buffer: uniformBuffer,
        },
      },
    ],
  });

  const verticesBuffer = logical_device.createBuffer({
    size: cubeVertexArray.byteLength,
    usage: GPUBufferUsage.VERTEX,
    mappedAtCreation: true,
  });
  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);
  verticesBuffer.unmap();

  const depthTexture = logical_device.createTexture({
    size: [canvas.width, canvas.height],
    format: 'depth24plus',
    usage: GPUTextureUsage.RENDER_ATTACHMENT,
  });

  const indicesBuffer = logical_device.createBuffer({
    size: quadIndexArray.byteLength,
    usage: GPUBufferUsage.INDEX,
    mappedAtCreation: true,
  });
  new Uint16Array(indicesBuffer.getMappedRange()).set(quadIndexArray);
  indicesBuffer.unmap();

  return {context, logical_device, pipeline, verticesBuffer, indicesBuffer, uniformBindGroup, uniformBuffer, depthTexture};
} 

const draw = ({context, logical_device, pipeline, verticesBuffer, indicesBuffer, uniformBindGroup, uniformBuffer, depthTexture}: {context: GPUCanvasContext, logical_device: GPUDevice, pipeline: GPURenderPipeline, verticesBuffer: GPUBuffer, indicesBuffer: GPUBuffer, uniformBindGroup: GPUBindGroup, uniformBuffer: GPUBuffer, depthTexture: GPUTexture}): void => {
  const projectionMatrix = mat4.create() as Float32Array;
  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, 1, 1, 100.0);
  logical_device.queue.writeBuffer(
    uniformBuffer,
    4 * 16 * 0,
    projectionMatrix.buffer,
    projectionMatrix.byteOffset,
    projectionMatrix.byteLength
  );

  const viewMatrix = mat4.create() as Float32Array;
  mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -4));
  logical_device.queue.writeBuffer(
    uniformBuffer,
    4 * 16 * 1,
    viewMatrix.buffer,
    viewMatrix.byteOffset,
    viewMatrix.byteLength
  );
	
  const worldMatrix = mat4.create() as Float32Array;
	const now = Date.now() / 1000;
  mat4.rotate(
    worldMatrix,
    worldMatrix,
    1,
    vec3.fromValues(Math.sin(now), Math.cos(now), 0)
  );
  logical_device.queue.writeBuffer(
    uniformBuffer,
    4 * 16 * 2,
    worldMatrix.buffer,
    worldMatrix.byteOffset,
    worldMatrix.byteLength
  );

  const commandEncoder = logical_device.createCommandEncoder();
  const textureView = context.getCurrentTexture().createView();
  const renderPassDescriptor: GPURenderPassDescriptor = {
    colorAttachments: [
      {
        view: textureView,

        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },

        loadOp: 'clear',

        storeOp: 'store',
      },
    ],
    depthStencilAttachment: {
      view: depthTexture.createView(),

      depthClearValue: 1.0,
      depthLoadOp: 'clear',
      depthStoreOp: 'store',
    },
  };

  const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
  passEncoder.setPipeline(pipeline);
  passEncoder.setBindGroup(0, uniformBindGroup);
  passEncoder.setVertexBuffer(0, verticesBuffer);
  passEncoder.draw(cubeVertexCount);
  passEncoder.end();

  logical_device.queue.submit([commandEncoder.finish()]);
  requestAnimationFrame(draw.bind(draw, {context, logical_device, pipeline, verticesBuffer, indicesBuffer, uniformBindGroup, uniformBuffer, depthTexture}));

  return;
}

export default function Renderer() {
  //const [call_init, setIn] = useState(0);
  //const [call_frame, setFr] = useState(0);
  //const [h, setH] = useState(0);

  //const [window_size, setWindowSize] = useState({width: 0, height: 0});

  useEffect(
    () => {
      if (!window) {
        return;
      }

      const handleResize = () => {
        const canvas = document.getElementById("world_canvas") as HTMLCanvasElement;
        canvas.setAttribute("width", (window.innerWidth).toString());
        canvas.setAttribute("height", (window.innerHeight).toString());
      }

      handleResize();
      window.addEventListener("resize", handleResize);
      
      return;
    },
    []
  );

  useEffect(
    () => {
      (
        async() => {
          const {context, logical_device, pipeline, verticesBuffer, indicesBuffer, uniformBindGroup, uniformBuffer, depthTexture} = await initializeRenderer(document.getElementById("world_canvas") as HTMLCanvasElement);
          requestAnimationFrame(draw.bind(draw, {context, logical_device, pipeline, verticesBuffer, indicesBuffer, uniformBindGroup, uniformBuffer, depthTexture}));
          window.addEventListener("resize", draw.bind(draw, {context, logical_device, pipeline, verticesBuffer, indicesBuffer, uniformBindGroup, uniformBuffer, depthTexture}));
          return;
        }
      )();
      return;
    },
    []
  );

  return (
    <div className = {styles["RendererPage"]}>
      <Head>
        <title>
          Renderer 4D
        </title>
        <meta
          name    = "description"
          content = "Renderer 4D"
        />
        <meta
          name    = "viewport"
          content = "width=device-width, initial-scale=1"
        />
        <link
          rel  = "icon"
          href = "/Resources/favicon.ico"
        />
        <link
          rel  = "apple-touch-icon"
          href = "/Resources/logo192.png"
        />
      </Head>
      <main className = {styles["RendererMain"]}>
        <canvas id="world_canvas" width="500" height="500">
        </canvas>
      </main>
    </div>
  );
}