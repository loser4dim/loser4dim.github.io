"use client";

import {
  faDocker,
  faGit,
  faGitlab,
  faGithub,
  faJenkins,
  faNodeJs,
  faPython,
  faReact,
  faUbuntu,
  faUnity,
  faCss3,
  faRust,
  faMarkdown,
  faJs,
  faGolang,
  faCloudflare,
  faHtml5,
  faJava,
  faAws,
  faWindows,
  faRedhat,
  faRaspberryPi,
  faCentos
} from "@fortawesome/free-brands-svg-icons";
import { faTableCells }    from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillIcons() {
  const skills = [
    {
      icon: faWindows,
      name: "windows",
      url : "https://www.microsoft.com/ja-jp/windows"
    },
    {
      icon: faUbuntu,
      name: "ubuntu",
      url : "https://ubuntu.com/"
    },
    {
      icon: faCentos,
      name: "centos",
      url : "https://www.centos.org"
    },
    {
      icon: faRedhat,
      name: "redhat",
      url : "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
    },
    {
      icon: faRaspberryPi,
      name: "raspberrypi",
      url : "https://www.raspberrypi.com"
    },
    {
      icon: faDocker,
      name: "docker",
      url : "https://www.docker.com/"
    },
    {
      icon: faAws,
      name: "aws",
      url : "https://aws.amazon.com/jp/"
    },
    {
      icon: faCloudflare,
      name: "cloudfrare",
      url : "https://www.cloudflare.com/ja-jp/"
    },
    {
      icon: faGit,
      name: "git",
      url : "https://git-scm.com/"
    },
    {
      icon: faGithub,
      name: "gitHub",
      url : "https://github.com/loser4dim"
    },
    {
      icon: faGitlab,
      name: "gitLab",
      url : "https://about.gitlab.com/"
    },
    {
      icon: faJenkins,
      name: "jenkins",
      url : "https://www.jenkins.io/"
    },
    {
      icon: faRust,
      name: "rust",
      url : "https://www.rust-lang.org/ja"
    },
    {
      icon: faGolang,
      name: "golang",
      url : "https://go.dev"
    },
    {
      icon: faPython,
      name: "python",
      url : "https://www.python.org/"
    },
    {
      icon: faJava,
      name: "java",
      url : "https://www.java.com/ja/"
    },
    {
      icon: faJs,
      name: "javascript",
      url : "https://developer.mozilla.org/ja/docs/Web/JavaScript"
    },
    {
      icon: faHtml5,
      name: "html",
      url : "https://html.spec.whatwg.org/multipage/"
    },
    {
      icon: faCss3,
      name: "css",
      url : "https://developer.mozilla.org/ja/docs/Web/CSS"
    },
    {
      icon: faMarkdown,
      name: "markdown",
      url : "https://developer.mozilla.org/ja/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN"
    },
    {
      icon: faTableCells,
      name: "spreadsheet",
      url : "https://docs.google.com/spreadsheets/d/1EtmpXMQ10AV_YdliGjXR28xeNPCQy6O9czi1Nm0KqSs/edit?usp=sharing"
    },
    {
      icon: faUnity,
      name: "unity",
      url : "https://unity.com/"
    },
    {
      icon: faNodeJs,
      name: "nodejs",
      url : "https://nodejs.org/"
    },
    {
      icon: faReact,
      name: "react",
      url : "https://react.dev/"
    }
  ];

  return (
    <section className="w-full max-w-5xl text-center">
      <div className="flex flex-wrap justify-center gap-6 text-xl text-neutral-200 sm:max-w-xl mx-auto">
        {
          skills.map(
            (skill, i) => (
              <a
                key={i}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                title={skill.name}
                className="inline-flex flex-col items-center transition-transform duration-200 transform hover:scale-125 will-change-transform"
              >
                <FontAwesomeIcon icon={skill.icon} />
              </a>
            )
          )
        }
      </div>
    </section>
  );
}