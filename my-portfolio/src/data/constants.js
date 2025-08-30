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

// Education Section Logo's
import btechLogo from "../assets/education_logo/college_of_engineering_logo.jpeg"
import HSCLogo from "../assets/education_logo/khalsa.jpeg"

// Project Section Logo's



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
  //   {
  //     id: 1,
  //     img: agcLogo,
  //     role: "Fullstack Engineer",
  //     company: "Agumentik Group of Companies",
  //     date: "July 2023 - March 2024",
  //     desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //     skills: [
  //       "ReactJS",
  //       "Redux",
  //       "JavaScript",
  //       "Tailwind CSS",
  //       "HTML",
  //       "CSS",
  //       "SQL",
  //     ],
  //   },
  ];
  
  export const education = [
    // {
    //   id: 0,
    //   img: glaLogo,
    //   school: "GLA University, Mathura",
    //   date: "Sept 2022 - July 2024",
    //   grade: "7.81 CGPA",
    //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    //   degree: "Master of Computer Applications - MCA",
    // },
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
      image: tailwindcssLogo,
      tags: ["Tailwind CSS", "Spring Boot", "Spring Security", "React JS", "API", "Java Mail Sender", "React Router DOM", "Axios", "JWT","Payment Integration",  "Razorpay"],
      github: "https://github.com/Tejas8075/Full-Stack-Projects/tree/main/Urbancart%20App",
      webapp: "https://githubprofiledetective.netlify.app/",
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