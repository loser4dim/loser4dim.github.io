import { useEffect } from "react";

const initialize = async() => {
  const vertex_shader_soutrce_code =
  `
    @vertex
    fn main(@builtin(vertex_index) VertexIndex: u32) -> @builtin(position) vec4<f32> {
      var pos = array<vec2<f32>, 3>(
        vec2<f32>(0.0, 0.5),
        vec2<f32>(-0.5, -0.5),
        vec2<f32>(0.5, -0.5)
      );
      return vec4<f32>(pos[VertexIndex], 0.0, 1.0);
    }
  `;
  const fgragment_shader_soutrce_code =
  `
    @fragment
    fn main() -> @location(0) vec4<f32> {
      return vec4<f32>(1.0, 0.0, 0.0, 1.0);
    }
  `;
  const canvas          = document.getElementById("world_canvas") as HTMLCanvasElement;
  const current_context = canvas.getContext("webgpu") as GPUCanvasContext;

  const current_physical_device = await navigator.gpu.requestAdapter()
  if(!current_physical_device) {
    throw new Error("Not Found Physical Device");
  };

  const current_logical_device = await current_physical_device.requestDevice();
  if(!current_logical_device) {
    throw new Error("Not Found Logical Device");
  };
  
  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
  current_context.configure(
    {
      device   : current_logical_device,
      format   : navigator.gpu.getPreferredCanvasFormat(),
      alphaMode: 'opaque',
    }
  );

  const current_pipeline = current_logical_device.createRenderPipeline(
    {
      layout: 'auto',
      vertex: {
        module: current_logical_device.createShaderModule(
          {
            code: vertex_shader_soutrce_code,
          }
        ),
        entryPoint: 'main'
      },
      fragment: {
        module: current_logical_device.createShaderModule(
          {
            code: fgragment_shader_soutrce_code,
           }
        ),
        entryPoint: 'main',
        targets: [
          {
            format: presentationFormat,
          },
        ],
      },
      primitive: {
        topology: 'triangle-list'
      }
    }
  );

  const commandEncoder = current_logical_device.createCommandEncoder();
  const textureView    = current_context.getCurrentTexture().createView();

  const renderPassDescriptor: GPURenderPassDescriptor = {
    colorAttachments: [
      {
        view: textureView,
        clearValue: {
          r: 0.1,
          g: 0.2,
          b: 0.3,
          a: 1.0
        },
        loadOp: 'clear',
        storeOp: 'store'
      }
    ]
  };
  const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
  passEncoder.setPipeline(current_pipeline);

  passEncoder.draw(3, 1, 0, 0);
  passEncoder.end();

  current_logical_device.queue.submit([commandEncoder.finish()]);
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
        canvas.setAttribute("width", (window.innerWidth * 0.95).toString());
        canvas.setAttribute("height", (window.innerHeight * 0.95).toString());
      }

      handleResize();
      window.addEventListener("resize", handleResize);
      
      return;
    },
    []
  );



  useEffect(
    () => {
      
      initialize();
    },
    []
  );

  /*useEffect(
    () => {
      const frame = () => {
        if(!context) {
          throw new Error("NULL Context");
        }
        if(!device) {
          throw new Error("NULL Device");
        }
        if(!pipeline) {
          throw new Error("NULL Pipeline");
        }
        
        const commandEncoder = device.createCommandEncoder();
        const textureView    = context.getCurrentTexture().createView();

        const renderPassDescriptor: GPURenderPassDescriptor = {
          colorAttachments: [
            {
              view: textureView,
              clearValue: {
                r: 0.0,
                g: 0.0,
                b: 0.0,
                a: 1.0
              },
              loadOp: 'clear',
              storeOp: 'store',
            },
          ],
        };
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(pipeline);

        passEncoder.draw(3, 1, 0, 0);
        passEncoder.end();

        device.queue.submit([commandEncoder.finish()]);

        return;
      }
      
      requestAnimationFrame(frame.bind(frame));
      setFr(call_frame + 1);
    },
    []
  );*/

  return (
    <main>
      <canvas id="world_canvas" width="5" height="5">
      </canvas>
    </main>
  );
}
