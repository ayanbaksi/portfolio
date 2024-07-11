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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,

} from "../assets";
import tgbLogo from '../assets/company/tgb.png';
import virtusaLogo from '../assets/company/virtusa.jpg';
import cinepulseLogo from "../assets/cinepulse.png";
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
    title: "Oracle Certified Java Associate",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern-Delivery",
    company_name: "Virtusa",
    icon: virtusaLogo,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Led the Inventory Management project, utilizing React for frontend, Spring Boot for backend, and MySQL for database management.",
      "Implemented real-time inventory tracking, stock replenishment alerts, and automated ordering processes.",
      "Integrated barcode scanning for efficient item identification and tracking, and executed OTP authentication via Google Firebase for enhanced security.",
      "Ensured seamless frontend-backend communication, implemented routing for easy navigation, and facilitated integration of all frontend components.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "TGB Infotech",
    icon: tgbLogo,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js,Next.js and other related technologies.",
      "Managing database operations using mongoDB and Node.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Ayan does.",
    name: "Susan Guha",
    designation: "CEO",
    company: "TGB Infotech",
    image: "https://media.licdn.com/dms/image/C4D03AQF6D0c2auGi6w/profile-displayphoto-shrink_800_800/0/1516933401704?e=1726099200&v=beta&t=oZcw5JMp_RylIY3m6CjRK6fWy99uUG2qJGIO3qVtnCE",
  },
  {
    testimonial:
      "Working with Ayan was a game-changer, his expertise and creativity transformed into an outstanding website.",
    name: "Jishnu Sinha",
    designation: "Senior Web Developer",
    company: "TGB Infotech",
    image: "https://media.licdn.com/dms/image/C4D03AQHiowqXomtsvw/profile-displayphoto-shrink_800_800/0/1652002826561?e=1726099200&v=beta&t=A_ECJSCF1k9za6RJy9bqcbS_Z3Bc4da0Wvjs3YFV3Uc",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Cine Pulse",
    description:
      "🎬 Developed a dynamic movie discovery platform using Vite, React, and TMDb API. Features include trailers, cast information, personalized recommendations, and many more 🚀",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "the movie db",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cinepulseLogo,
    source_code_link: "https://github.com/ayanbaksi/CinePulse",
  },
  {
    name: "Inventory Management System",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ayanbaksi/Inventory-Management",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
