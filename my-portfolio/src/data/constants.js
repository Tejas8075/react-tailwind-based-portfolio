// Skills Section Logo's
import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import springbootLogo from '../assets/tech_logo/springboot.png';
import springLogo from '../assets/tech_logo/spring.png';
import springdatajpaLogo from '../assets/tech_logo/sprigdatajpa.png';
import springmvcLogo from '../assets/tech_logo/springmvc.png';
import springsecurityLogo from '../assets/tech_logo/springsecurity.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import javaLogo from '../assets/tech_logo/java.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import postmanLogo from '../assets/tech_logo/postman.png';
import dockerLogo from '../assets/tech_logo/docker.png';
import sonarqubeLogo from '../assets/tech_logo/sonarqube.jpeg';
import swaggerLogo from '../assets/tech_logo/swagger.png';
import awsLogo from '../assets/tech_logo/aws.png';
import linuxLogo from '../assets/tech_logo/linux.png';

// Experience Section Logo's
import JSCertificate from '../assets/company_logo/Certificate of Completion - JS.png';
import ReactCertificate from '../assets/company_logo/Certificate of Completion - React.png'
import SpringCertificate from '../assets/company_logo/Spring Boot Certification.png'

// Education Section Logo's
import btechLogo from "../assets/education_logo/college_of_engineering_logo.jpeg"
import HSCLogo from "../assets/education_logo/khalsa.jpeg"

// Project Section Logo's
import urbancart from "../assets/work_logo/UrbancartImg.png"


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring', logo: springLogo },
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Spring Data JPA', logo: springdatajpaLogo },
      { name: 'Spring Web MVC', logo: springmvcLogo },
      { name: 'Spring Security', logo: springsecurityLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      // { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'Sonarqube', logo: sonarqubeLogo },
      { name: 'Swagger', logo: swaggerLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'Linux', logo: linuxLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: JSCertificate,
      role: "Complete JAVASCRIPT",
      company: "KnowledgeGate",
      date: "August 2025",
      desc: "Gained proficiency in core and intermediate JavaScript concepts through hands-on projects, including a To-Do App, Weather App, and E-Commerce Clone, covering topics like variables, data types, DOM manipulation, and promises.",
      skills: [
        "JavaScript",
        "DOM Manipulation",
        "Promises",
        "Async/Await",
      ],
    },
    {
      id: 1,
      img: ReactCertificate,
      role: "React and Redux",
      company: "KnowledgeGate",
      date: "August 2025",
      desc: "I recently completed a React Certification, gaining hands-on experience with JSX, Fragments, Hooks (useState, useReducer), Context API, and Conditional Rendering.As part of the course, I built projects like a Social Media Post App, To-Do List, and an E-commerce UI Clone, which enhanced my problem-solving and frontend development skills.Excited to apply these skills in building scalable and interactive web applications!",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      id: 2,
      img: SpringCertificate,
      role: "Spring Boot Course: Certified Course for Essential Skills",
      company: "Scaler",
      date: "August 2025",
      desc: "Gained hands-on experience with Spring Boot, Spring Security, Database Design, and built real-world projects like a Task Manager and Blogging App.Looking forward to applying these skills to create impactful full-stack applications!",
      skills: [
        "Spring",
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Spring Security",
        "DB Schema Design",
        "API Design"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: btechLogo,
      school: "Fr. Conceicao Rodrigues College of Engineering, Mumbai",
      date: "Sept 2020 - Aug 2024",
      grade: "8.55 CGPA",
      desc: "I completed my Bachelor's degree in Mechanical Engineering from Fr. Conceicao Rodrigues College of Engineering, Mumbai. Throughout my studies, I was immersed in a variety of subjects of mechanics as well as Programming that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Bachelor of Technology (B.Tech.)",
    },
    {
      id: 1,
      img: HSCLogo,
      school: "Guru Nanak Khalsa College of Arts, Science and Commerce , Mumbai",
      date: "August 2018 - March 2020",
      grade: "84.15%",
      desc: "I completed my class 12th education from Guru Nanak Khalsa College of Arts, Science and Commerce , Mumbai, under the HSC board, where I studied Physics, Chemistry, and Mathematics and Biology (PCMB).",
      degree: "HSC(XII) - PCMB",
    },
    {
      id: 2,
      img: '',
      school: "Sacred Heart High School, Mumbai",
      date: "March 2018",
      grade: "86.20%",
      desc: "I completed my class 10th education from Sacred Heart High School, Mumbai, under the SSC board.",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Urbancart Ecommerce Project",
      description:
        "A feature-rich Multi-Vendor Web Application offering customers advanced product browsing, secure payments, and chatbot support; sellers get an interactive dashboard for sales and product management; and admins enjoy full control over sellers, deals, and platform customization.",
      image: urbancart,
      tags: ["Tailwind CSS", "Spring Boot", "Spring Security", "React JS", "API", "Java Mail Sender", "React Router DOM", "Axios", "JWT","Payment Integration",  "Razorpay"],
      github: "https://github.com/Tejas8075/Full-Stack-Projects/tree/main/Urbancart%20App",
      webapp: " ",
    },
    // {
    //   id: 1,
    //   title: "CS Prep",
    //   description:
    //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    //   image: csprepLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/CSPrep",
    //   webapp: "https://csprep.netlify.app/",
    // },
  ];  