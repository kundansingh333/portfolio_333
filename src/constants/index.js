import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    weatherimg,
    tesla,
    shopify,

    tastetrial,
    spotify,
    threejs,
    weather,
    gmail,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id:"github",
      title:"Github",
    },
    {
      id:"linkedin",
      title:"Linkedin",
    }
  
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Weather App",
      icon: weatherimg,
      iconBg: "#383E56",
      date: "August 2024 - September 2024",
      points: [
        "Designed and developed a dynamic Weather Application independently using React.js and related technologies, ensuring a seamless and interactive user experience.",
        "Implemented responsive design to guarantee optimal functionality across various devices and browsers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Adhered to best coding practices, conducted self-reviews, and resolved challenges independently to enhance code quality and functionality.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Gmail ",
      icon: gmail,
      iconBg: "#E6DEDD",
      date: "Oct 2024 - Nov 2024",
      points: [
        "Independently designed and developed a Gmail clone using React.js and related technologies, focusing on replicating core email functionalities and user interface.",
        "Implemented features such as a basic inbox layout, email composition interface, and search functionality, though not fully operational at this stage.",
        "Focused on responsive design principles to ensure usability across devices, including desktops, tablets, and smartphones.",
        "Encountered challenges with functionality implementation, which are being addressed through iterative development and debugging.",
        "Utilized the project as a learning experience to deepen understanding of React.js, state management, and web application design.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kundan proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kundan does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    

   
  ];
  
  const projects = [
    {
      name: "Taste Trial",
      description:
        "My project is a restaurant discovery website that helps users find dining options with menus, reviews, and ratings. It connects users to the best nearby restaurants for an enhanced dining experience.",
      tags: [
        {
          name: "ejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tastetrial,
      source_code_link: "https://github.com/kundansingh333/TasteTrial",
    },
    {
      name: "Weather App",
      description:
        "My project is a weather checker app that provides real-time updates on current weather conditions. It helps users stay informed about temperature, humidity, and more with ease.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image:weather,
      source_code_link: "https://github.com/kundansingh333/weather-app",
    },
    {
      name: "Spotify Clone",
      description:
        "My project is a non-functional Spotify clone designed to mimic the platform's user interface. It showcases the layout and design elements without actual music streaming capabilities",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/kundansingh333/spotify-clones",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };