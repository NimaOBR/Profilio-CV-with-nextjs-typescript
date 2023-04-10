import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";

import { IProject, Iservis, ISkill } from "./type";

export const servises: Iservis[] = [
  {
    id: 1,
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    id: 2,
    Icon: FaServer,
    title: "Electronics Engineer",
    about: "Studying and applying for John Hopkins University in America",
  },
  {
    id: 3,
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>GeaphQL</b>  & <b>Node API</b> ",
  },
  {
    id: 4,
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    id: 5,
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    id: 6,
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "I love the world of electronics and programming and my goal is to change the world in the near future ",
  },
];

export const languages: ISkill[] = [
  {
    Icon: AiFillCheckCircle,
    name: "JavaScript & Scss",
    level: "83%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "HTML5 & CSS3",
    level: "95%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "RestApi & GraphQL",
    level: "82%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "ReactNative",
    level: "70%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "NextJS & Tailwind",
    level: "75%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "Redux-Toolkit",
    level: "77%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "TypeScript JSX/TSX",
    level: "80%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "React & Redux",
    level: "80%",
  },

];

export const tools: ISkill[] = [
  {
    Icon: AiFillCheckCircle,
    name: "Figma",
    level: "85%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "Photoshop",
    level: "49%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "Illustrator",
    level: "60%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "Framer",
    level: "45%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "Video editor",
    level: "65%",
  },
  {
    Icon: AiFillCheckCircle,
    name: "Electronic boards",
    level: "55%",
  },

];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Night Movie",
    descriptions:
      "The worlds latest movie and series site with various features, and It has a great UX & UI",
    image_path: "/images/nimaweb.png",
    deploy_url: "https://majestic-bunny-2e7b53.netlify.app",
    github_url: "https://github.com/NimaOBR?tab=repositories",
    category: ["react", "typescript"],
    key_tech: ["React", "Material UI", "API"],
  },
  {
    id: 2,
    name: "Blug Hub",
    descriptions:
      "The site of all kinds of articles about the world of technology and all kinds of famous authors with the ability to leave comments",
    image_path: "/images/blughub.png",
    deploy_url: "https://delightful-starlight-cc06db.netlify.app",
    github_url: "https://github.com/NimaOBR/GraphQL-Learning",
    category: ["nextjs"],
    key_tech: ["React", "GraphQL", "node", "Scss", "Firebace"],
  },
  {
    id: 3,
    name: "Dalla App",
    descriptions:
      "Most of it has a strong UX & UI and the purpose of making it is the same with registration and email capabilities",
    image_path: "/images/dalla.png",
    deploy_url: "https://guileless-pie-f710e1.netlify.app",
    github_url: "https://github.com/NimaOBR?tab=repositories",
    category: ["react"],
    key_tech: ["React", "Material UI", "API"],
  },
  {
    id: 4,
    name: "Shopping Card",
    descriptions: "A store site with a variety of features",
    image_path: "/images/store.png",
    deploy_url: "https://relaxed-melomakarona-a6df4e.netlify.app",
    github_url: "https://github.com/NimaOBR/TypeScript-Store-Shopping",
    category: ["nextjs"],
    key_tech: ["React", "NextJS", "API", "Tailwind"],
  },
  {
    id: 5,
    name: "Admin Panel",
    descriptions: "Excellent site management panel",
    image_path: "/images/adminpanel.png",
    deploy_url: "https://majestic-bunny-2e7b53.netlify.app",
    github_url: "https://github.com/NimaOBR/demo",
    category: ["react", "typescript"],
    key_tech: ["React", "Material UI", "Chartjs"],
  },
  {
    id: 6,
    name: "Profilio CV",
    descriptions: "Profile and about me and communication with me",
    image_path: "/images/nimaprofilio.png",
    deploy_url: "https://superb-tartufo-7ddc81.netlify.app",
    github_url: "https://github.com/NimaOBR",
    category: ["react"],
    key_tech: ["React", "Material UI", "Tailwind", "Framer Motions"],
  },
];
