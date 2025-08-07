// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import northgateLogo from './assets/company_logo/northgate_logo.png';


// Education Section Logo's
import ueLogo from './assets/education_logo/ue_logo.png';
import lacoLogo from './assets/education_logo/laco_logo.png';

// Project Section Logo's
import clickmoraleLogo from './assets/work_logo/clickmorale_logo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: northgateLogo,
      role: "Quality Assurance Intern",
      company: "Northgate Technologies",
      date: "Jan 2025 - May 2025",
      desc: "Performed software and hardware quality assurance testing in a structured IT environment. Executed and documented test cases, reported bugs and inconsistencies, and collaborated with developers to resolve issues. Participated in seminars and QA discussions to improve product reliability and testing efficiency.",
    },
  ];

  export const education = [
    {
      id: 0,
      img: ueLogo,
      school: "University of the East-Caloocan, Philippines",
      date: "Aug 2020 - May 2025",
      desc: "I have completed my Bachelor's degree (BSIT) in Information Technology from University of the East-Caloocan, Philippines. During my time at UE, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at UE has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Science in Information Technology (BSIT), Cum Laude",
    },
    {
      id: 1,
      img: lacoLogo,
      school: "La Consolacion College-Caloocan, Philippines",
      date: "June 2018 - May 2020",
      desc: "I completed my Information, Communication and Technology (ICT) degree from La Consolacion College-Caloocan, Philippines. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at La Consolacion College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Information, Communication and Technology (ICT)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ClickMorale",
      description:
        "ClickMorale is a fun and engaging quiz web application built with React.js and Tailwind CSS. It helps users discover their social style—whether they're introverted, ambiverted, or socially skilled—through an interactive, well-designed quiz experience. With smooth transitions, themed visuals, and personalized results, ClickMorale showcases both UX/UI design and front-end development skills.",
      image: clickmoraleLogo, // replace with your actual logo variable
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
      github: "https://github.com/3ppyyy/clickmorale", // update with your actual repo URL
      webapp: "https://clickmorale.netlify.app/", // update with your actual live URL
    },
  ];  