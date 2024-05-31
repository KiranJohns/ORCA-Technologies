import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    bootstrap,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: bootstrap,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Brototype Intern",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2022 - Sept 2022",
        points: [
            "Developing and maintaining web applications using HTML CSS and Javascript.",
            "Created a full stack project using express Js",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#fbc3bc",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Full stack Developer",
        company_name: "Liexa Creations",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Dec 2022 - April 2023",
        points: [
            "Developing and maintaining web applications using HTML, CSS, JS, jQuery and CodeIgniter.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Completed 'The DaleView Care Point' project and manintenance and updation of few other projects."
        ],
    },
    {
        title: "Front End Developer",
        company_name: "Freelance",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "May 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies and basic API using Express js",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Completed many projects including 'Learn For Care', 'Astra Nova Careers' etc..",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: nextjs,
        theme: 'btn-back-red',
        name: 'Learn For Care',
        description: 'Developed a web application for a UK based client on Next.js. The Learn for Care website offers online training courses aimed at professionals in the health and social care sectors.',
        link: 'https://learnforcare.co.uk/',
    },
    {
        iconUrl: nextjs,
        theme: 'btn-back-green',
        name: 'Astra Nova Career',
        description: 'Developed a full-stack application using Next.js for the front end and Express.js for the back end for Astra Nova Careers, a job consultancy primarily focused on healthcare sector jobs.',
        link: 'https://www.astranova.co.in/',
    },
    {
        iconUrl: html,
        theme: 'btn-back-blue',
        name: 'Dale View',
        description: "Designed and built a web app for 'The DaleView Care Point', which built on HTML, CSS, Js and CodeIgniter",
        link: 'https://carepoint.daleview.in',
    },
    {
        iconUrl: html,
        theme: 'btn-back-pink',
        name: 'Aden Digital',
        description: 'Built a website for "Aden Digital", using HTML, CSS and Js. ',
        link: 'https://vizhinjamvarf.com',
    },
    {
        iconUrl: html,
        theme: 'btn-back-black',
        name: 'VARF',
        description: 'Developed a web application for "VARF", using HTML, CSS and Js.',
        link: 'https://vizhinjamvarf.com',
    },
    {
        iconUrl: html,
        theme: 'btn-back-yellow',
        name: 'Noble Enterprises',
        description: 'esigned and built a web app for "Noble Enterprise", which built on HTML, CSS, Js and CodeIgniter',
        link: 'https://www.nobleenterprises.co'
    }
];