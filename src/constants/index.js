import {
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
    mongodb,
    git,
    figma,
    library,
    ultraverse,
    twitter,
    threejs,
    junta,
    duv,
    simplified,
    freelance,
    uceta,
    eduardo,
    david,
    netflix,
    admin,
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
        {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI / UX Designer",
      icon: creator,
    },
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
    {
      name: "TypeScript",
      icon: typescript,
    },
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
  ];
  
  const experiences = [
    {
      title: "Technical Support",
      company_name: "Junta Central Electoral (JCE)",
      icon: junta,
      iconBg: "#383E56",
      date: "January 2022 - June 2022",
      points: [
        "Developing and maintaining issues from the database or the computer itself",
        "Collaborating with cross-functional teams including others techincal supports, Project Manager and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to others.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "August 2022 - Present",
      points: [
        "Developing various websites with a beautiful designs and responsiveness",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "DUV Agency",
      icon: duv,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - March 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Front End Simplified",
      icon: simplified,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Present",
      points: [
        "Aptitudes: React.js · Next.js · Firebase · TypeScript · Tailwind CSS · React Hooks · GitHub · HTML5 · CSS",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Your dedication, creativity, and positive attitude have made our collaboration a true pleasure.",
      name: "Alexander Uceta",
      designation: "Sr. QA and Dev",
      company: "Uceta Soluciones",
      image: uceta,
    },
    {
      testimonial:
        "Your outstanding dedication and creative approach made working together a delightful experience.",
      name: "David Bragg",
      designation: "CEO",
      company: "FES",
      image: david,
    },
    {
      testimonial:
        "Your exceptional collaboration and positive contributions have been invaluable to our success.",
      name: "Luis Eduardo",
      designation: "Associate Developer",
      company: "TransUnion",
      image: eduardo,
    },
  ];
  
  const projects = [
    {
      name: "Library Website",
      description:
        "Web-based platform that allows users to search, check the information and buy the books that he/she wants.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: library,
      source_code_link: "https://github.com/krakatua/Library-app",
    },
    {
      name: "Ultraverse NFT Page",
      description:
        "Web-based platform that allows the user search nfts see their owner, last owner, transaction and like them",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ultraverse,
      source_code_link: "https://github.com/krakatua/rudis-intership",
    },
    {
      name: "Twitter Clone",
      description:
        "A clone of twitter that lets the user make post and like them and retweet other posts",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "pink-text-gradient",
        },
      ],
      image: twitter,
      source_code_link: "https://github.com/krakatua/Twitter-C",
    },
    {
      name: "Netflix Clone",
      description:
        "A clone of netflix that lets the user check the preview of the movie, list them as favorite",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/krakatua/netflix-app",
    },
    {
      name: "Admin Database",
      description:
        "I'm developing a website application that allows you to add products to your ecommerce. Status: Ongoing",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "pink-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: admin,
      source_code_link: "https://github.com/krakatua/ECommerAdmin",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };