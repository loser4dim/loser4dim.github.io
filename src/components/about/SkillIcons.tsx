// "use client";

// import {
//   faGithub,
//   faDocker,
//   faReact,
//   faPython,
//   faGitlab,
//   faUnity,
//   faUbuntu,
//   faNodeJs,
//   faJenkins,
//   faGit
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faTableCells
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function SkillIcons() {
//   const skills = [
//     {
//       icon: faUbuntu,
//       name: "Ubuntu",
//       url: "https://ubuntu.com/"
//     },
//     {
//       icon: faDocker,
//       name: "Docker",
//       url: "https://www.docker.com/"
//     },
//     {
//       icon: faGit,
//       name: "Git",
//       url: "https://git-scm.com/"
//     },
//     {
//       icon: faGithub,
//       name: "GitHub",
//       url: "https://github.com/loser4dim"
//     },
//     {
//       icon: faGitlab,
//       name: "GitLab",
//       url: "https://about.gitlab.com/"
//     },
//     {
//       icon: faJenkins,
//       name: "Jenkins",
//       url: "https://www.jenkins.io/"
//     },
//     {
//       icon: faTableCells,
//       name: "SpreadSheet",
//       url: "https://docs.google.com/spreadsheets/d/1EtmpXMQ10AV_YdliGjXR28xeNPCQy6O9czi1Nm0KqSs/edit?usp=sharing"
//     },
//     {
//       icon: faUnity,
//       name: "Unity",
//       url: "https://unity.com/"
//     },
//     {
//       icon: faPython,
//       name: "Python",
//       url: "https://www.python.org/"
//     },
//     {
//       icon: faNodeJs,
//       name: "Node.js",
//       url: "https://nodejs.org/"
//     },
//     {
//       icon: faReact,
//       name: "React",
//       url: "https://react.dev/"
//     }
//   ];

//   return (
//     <section className="w-4/5 max-w-2xl text-center">
//       <div className="flex flex-wrap gap-6 justify-center text-2xl text-stone-300">
//         {skills.map((skill, i) => (
//           <a
//             key={i}
//             href={skill.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             title={skill.name}
//             className="inline-flex flex-col items-center transition-transform duration-200 transform hover:scale-125 will-change-transform"
//           >
//        <FontAwesomeIcon icon={skill.icon} />
//        </a>
//       ))}
//       </div>
//     </section>
//   );
// }