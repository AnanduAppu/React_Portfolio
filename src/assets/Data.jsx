import React from "react";
import {  FaReact, FaCode,FaNodeJs,FaDatabase } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const Data = {
  name: "ANANDU SANKAR A P",
  title: "MERN Developer",
  social: {
    github: "https://github.com/AnanduAppu",
  
    email: "ananduap74@gmail.com",

    linkedin:"https://www.linkedin.com/in/anandu-sankar-a-p/"
  },
  about: {
    title: "My Background",
    description:
      "I’m Anandu Sankar A P, a passionate MERN Stack Developer skilled in React.js, Node.js, and Express.js. I specialize in building dynamic, responsive web applications and managing databases with MongoDB. With a love for problem-solving and a focus on creating user-friendly, high-performance solutions, I take pride in writing clean, maintainable code and using modern tools and frameworks to bring projects to life. ",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
      description:"Front-end development is the art of crafting visually stunning and highly interactive user interfaces for websites and applications. It involves translating design concepts into responsive, dynamic experiences using HTML, CSS, and JavaScript. By employing modern frameworks and libraries, front-end developers create seamless, engaging interactions that captivate users and enhance usability. With a focus on both aesthetics and functionality, front-end development transforms static designs into living, breathing digital experiences that drive user engagement and satisfaction."
    },
    {
        skillName: "Node.js",
        skillIcon: <FaNodeJs className={BOOTSTRAP_FOR_SKILL_ICON} />,
        description:"Node.js is a powerful, open-source JavaScript runtime built on Chrome's V8 engine. It enables developers to build fast, scalable network applications using JavaScript on the server side. Known for its event-driven, non-blocking I/O model, Node.js excels in handling concurrent requests with ease. Its rich ecosystem of libraries, combined with npm (Node Package Manager), empowers developers to create robust applications efficiently, making it a popular choice for building everything from real-time chat apps to complex APIs."
      },
      {
        skillName: "MongoDB",
        skillIcon: <FaDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />,
        description:'MongoDB is a leading NoSQL database known for its flexible schema and scalability. It stores data in JSON-like documents, allowing for dynamic and hierarchical data structures. With its powerful querying capabilities and support for indexing, MongoDB efficiently handles large volumes of data and complex queries. Ideal for modern applications, it excels in real-time data processing and offers robust tools for data replication, sharding, and high availability, making it a top choice for developers building scalable and high-performance applications.'
      },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
      description:"React.js is a powerful JavaScript library for building dynamic and interactive user interfaces. Developed by Facebook, it allows developers to create seamless, high-performance applications with reusable components. Its virtual DOM optimizes updates and rendering, ensuring a smooth user experience. React’s component-based architecture and rich ecosystem of tools make it an ideal choice for modern web development, enabling the creation of scalable and maintainable applications with ease."
    },
  ],
  projects: [
    {
      title: "Blog Bites",
      description: "👨‍🎨It's a blog website that I built using MERN technology.",
      tags: [
        "Mongodb",
        "Node",
        "Express",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/AnanduAppu/blogbites.git",
      link2:"https://github.com/AnanduAppu/blogbites_backend.git",
    },
    {
      title: "University data collection",
      description: "⚡ This is a university data collection system built with MERN technology.",
      tags: [
        "Mongodb",
        "Node",
        "Express",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/AnanduAppu/universityData_Ui.git",
      link2:"https://github.com/AnanduAppu/backend_unversityDATA",
      live:"https://university-data-ui.vercel.app/"
    },
    {
      title: "Quiz Application",
      description: "⚡ This is a quiz web application  built with MERN technology.",
      tags: [
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/AnanduAppu/Quize_app.git",
      live:"https://quize-app-kappa.vercel.app/"

    },
    {
      title: "Udemy website clone",
      description: "⚡ Lms website Udemy cloned with MERN technology.",
      tags: [
        "Mongodb",
        "Node",
        "Express",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/AnanduAppu/udemy_front_end-.git",
      link2:"https://github.com/AnanduAppu/udemy_bakend.git"
    },
    {
      title: "Task App",
      description: "Task app build with MERN technology.",
      tags: [
        "Mongodb",
        "Node",
        "Express",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/AnanduAppu/taskApp_front-end.git",
      link2:"https://github.com/AnanduAppu/taskApp_Back-end.git"
      
    },
    {
      title: "Papperfry clone",
      description: "Papperfry clone build with React",
      tags: [
        "reactjs",
        "Bootstrap"
      ],
      link: "https://github.com/AnanduAppu/React-First-Project.git",
      live:"https://react-first-project-theta.vercel.app/"
     
     
    },
    {
      title: "weather app",
      description: "weather app to get weather of popular cities all over the world",
      tags: [
        "Javascript",
        'css',
        "Bootstrap"
      ],
      link: "https://github.com/AnanduAppu/Wather_api.git",
      live:"https://ananduappu.github.io/Wather_api/"
     
     
    }
  ]
};
export default Data;
