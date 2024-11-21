import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";


import projectImage1 from "../assets/images/project1.png";
import projectImage2 from "../assets/images/project2.png";
import projectImage3 from "../assets/images/project3.png";
import projectImage4 from "../assets/images/project4.png";
import projectImage5 from "../assets/images/project5.png";
import projectImage6 from "../assets/images/project6.png";
import projectImage7 from "../assets/images/project7.png";
import projectImage8 from "../assets/images/project14.png";
import projectImage9 from "../assets/images/project15.png";
import projectImage10 from "../assets/images/project10.png";
import projectImage11 from "../assets/images/project11.png";
import projectImage12 from "../assets/images/project12.png";


import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiIbm } from "react-icons/si";

export const HERO = {
  name: "Nontombi Mbowane",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate, self-driven and knowledgeable junior developer with demonstrated experience in developing user-friendly software applications, coding and testing features, and providing engineering support. Oracle and IBM Certified Professional with extensive knowledge of multiple programming languages and software development tools, excellent problem-solving skills, and ability to perform well in a team.",
};

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];


export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/nonti/nonty-portfolio",
    demoLink: "https://nonty-portfolio.netlify.app"
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Reactjs and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/nonti/zaio-amazon-clone",
    demoLink: ""
  },
  {
    id: 3,
    name: "Tic Tac Toe Game",
    description:
      "Designed and built an engaging Tic Tac Toe game with an integrated music player using React , combining gameplay with an immersive user experience through background music and sound effects.v",
    image: projectImage3,
    githubLink: "https://github.com/nonti/tic-tac-toe-react",
    demoLink: "https://nonty-tic-tac-toe.netlify.app"
  },
  {
    id: 4,
    name: "Accommodation Platform",
    description:
      "A booking application developed using ReactJS and Redux for state management, enabling users to book accommodations, view available properties, and manage bookings seamlessly.",
    image: projectImage4,
    githubLink: "https://github.com/nonti/zaio-airbnb-clone",
    demoLink: ""
  },
  {
    id: 5,
    name: "Google Keep Note Platform",
    description:
      "Developed a Google Keep clone application using ReactJS, enabling users to create, edit, delete, and organize notes with ease..",
    image: projectImage5,
    githubLink: "https://github.com/nonti/zaio-google-keep-dom-firebase",
    demoLink: "https://zaio-google-keep-react.netlify.app"
  },
  {
    id: 6,
    name: "Ecommerce Backend Application",
    description:
      "A nodejs application using Typescript for backend services, including user authentication, Nodemailer  transport for emails and using MongoDB as a database.",
    image: projectImage6,
    githubLink: "https://github.com/nonti/nonty-nodejs-clone-app",
    demoLink: "No demo available"
  },
  {
    id: 7,
    name: "Delivery Backend Application",
    description:
      "A nodejs application using Typescript for backend services, including user authentication, Nodemailer  transport for emails and using MongoDB as a database.",
    image: projectImage7,
    githubLink: "https://github.com/nonti/nonty-nodejs-clone-app",
    demoLink: "No demo available"
  },
  {
    id: 8,
    name: "Google Keep Application",
    description:
      "Developed a Google Keep clone application using HTML, CSS and Javascript which is dynamic, enabling users to create, edit, delete, and organize notes with ease.",
    image: projectImage8,
    githubLink: "https://github.com/nonti/nonty-nodejs-clone-app",
    demoLink: "https://zaio-html-css-google-keep-clone.netlify.app"
  },
  {
    id: 9,
    name: "Youtube Clone Application",
    description:"A youtube clone with HTML and CSS which is static webpage" ,
    image: projectImage9,
    githubLink: "https://github.com/nonti/zaio-youtube-clone",
    demoLink: "https://zaio-streaming-youtube-services.netlify.app"
  },
  {
    id: 10,
    name: "Netflix Clone Application",
    description:"A netflix clone with HTML and CSS which is static webpage",
    image: projectImage10,
    githubLink: "https://github.com/nonti/zaio-git-netflix",
    demoLink: "https://movieflix-zaio-platform-landing-page.netlify.app"
  },
  {
    id: 11,
    name: "Tesla Clone Application",
    description:"A Tesla clone with HTML and CSS which is static webpage",
    image: projectImage11,
    githubLink: "https://github.com/nonti/zaio-tesla",
    demoLink: "https://nonty-zaio-tes-landing-page.netlify.app"
  },
  {
    id: 12,
    name: "Twitter Clone Application",
    description:"A Twitter clone with HTML and CSS which is static webpage",
    image: projectImage12,
    githubLink: "https://github.com/nonti/twitter-clone-virtual-project",
    demoLink: "https://zaio-nonty-twitter-clone.netlify.app"
  },
  
];

export const BIO = [
  "Nontombi Mbowane studied information technology at the Jeppe College of Commerce and Computer studies,from which she graduated in 2009. Following her education, ",
  "she is a resilient and versatile professional with a strong foundation in software development, technical support, and education assistance. With qualifications in Electrical Engineering and Information Technology, they have consistently demonstrated adaptability and determination to grow in their career.",
  "After facing health challenges that temporarily paused their professional journey, she joined a coding bootcamp to bridge the gap, gaining hands-on experience with modern tools and technologies like JavaScript, React, and Node.js, reaffirming their commitment to continuous learning and development.",
  "Nontombi's journey reflects a balance of technical expertise and a steadfast commitment to personal and professional growth, making them a reliable and resourceful contributor to any team."
 
];


export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "4+ months",
  },
  {
    icon: <FaJava className="text-4xl text-blue lg:text-5xl" />,
    name: "Java",
    experience: "2+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "5+ months",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1 month",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "4+ months",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <SiIbm className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "IBM Websphere",
    experience: "2+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Education Assistant",
    company: "Nkateko High School",
    duration: "February 2023 - September 2023",
    description:
      "As an Education Assistant, I worked closely with educators, providing support in various areas such as lesson planning, classroom management, and student engagement. I also assisted in organizing and executing school events, contributing to a positive learning environment.",
  },
  {
    title: "Junior Developer",
    company: "IMQS Software",
    duration: "May 2014 - October 2015",
    description:
      "At IMQS Software, I focused on research and development and improving functionality for using MongoDB, and writing Ruby scripts, designing yellofin reports",
  },
  {
    title: "Junior Developer",
    company: "Metropolitan Life",
    duration: "November 2012 - December 2013",
    description:
      "As a contractor, I worked on a project to develop a web application for the company's internal use. I collaborated with the development team to design and implement new features, ensuring the application met the company's requirements. I also participated in code reviews, bug fixes, and troubleshooting to ensure the application's stability and performance using IBM softwware.",
  },
  {
    title: "Junior Developer",
    company: "TSCTechnologies",
    duration: "February 2009 - April 2014",
    description:
      "In my role as a Junior Developer, I assisted in the development and maintenance of various open source software applications. I gained hands-on experience in utilizing JavaServerFaces, JavaServerPages, Enterprise Javabeans and IBM websphere architecture to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with team members to ensure project goals were met.",
  },
];

export const EDUCATION = [
  {
    degree: "Full Stack Web Development",
    institution: "Zaio coding school",
    duration: "March 2024 - September 2024",
    description:
      "Focused on web development, version control, programming languages, and database management. Actively involved in coding clubs , where I developed several web applications using HTML, CSS, JavaScript. Completed a senior project on developing an e-commerce and booking platform. Graduated with a certificate.",
  },
  {
    degree: "Certificate in Electrical Engineering",
    institution: "Tshwane College of Commerce and Computer Studies",
    duration: "Jaunary 2016 - December 2018",
    description:
      "Participated in various projects involving circuit design, power systems, and automation. Graduated with a certificate.",
  },
  {
    degree: "Advanced Diploma in Information Technology",
    institution: "Jeppe College of Commerce and Computer Studies",
    duration: "January 2007 - December 2008",
    description:
      "Specialized in Programming. Completed a research project on web development. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with diploma.",
  },
 
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];