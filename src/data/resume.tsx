import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Angular } from "@/components/ui/svgs/angular";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Bootstrap } from "@/components/ui/svgs/bootstrap";

export const DATA = {
  name: "Kanokphan Thananchai",
  initials: "Kanok",
  url: "https://menn.is-a.dev",
  location: "Hsinchu, Taiwan",
  locationLink: "https://www.google.com/maps/place/hsinchu",
  description:
    "Thai frontend developer exploring Taiwan for my master's. On a journey from coding websites to machine learning!",
  summary:
    "Hi! I studied [Computer Engineering at KMUTT for my bachelor's](/#education). After that, I worked in Bangkok for [5 years as a front-end developer](/#work), mostly using Angular. I got the opportunity to study for [my master's in Institute of Information Systems and Applications (ISA) at NTHU in Taiwan](/#education), which is where I am now. I really want to change my career path and become a AI engineer.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Angular", icon: Angular },
    { name: "Typescript", icon: Typescript },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hedgehog-menn@proton.me",
    tel: "+886972974152",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hedgehog-menn",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kp-thananchai",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:hedgehog-menn@proton.me",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ADLINK Technology",
      href: "https://www.adlinktech.com",
      badges: ["Shopify"],
      location: "Taoyuan, Taiwan",
      title: "Marketing Intern (Assistant Engineer)",
      logoUrl: "/adlink_logo.jpg",
      start: "July 2024",
      end: "Present",
      description:
        "Responsible for the routine maintenance, updates, and troubleshooting of the company's Shopify e-commerce platform. My role involves configuring Shopify Apps to seamlessly integrate new features and regularly updating web content, including product and landing pages. Additionally, I collaborate with cross-functional teams to integrate our brand identity and successfully execute online product promotions."
    },
    {
      company: "Allianz Technology",
      href: "https://tech.allianz.com",
      badges: ["Angular", "RxJS"],
      location: "Bangkok, Thailand",
      title: "Advanced Frontend developer",
      logoUrl: "/allianz_technology_logo.jpeg",
      start: "November 2020",
      end: "August 2023",
      description:
        "I collaborated daily with global teams across India, Germany, and Belgium. I focused on developing web applications using Angular, RxJS, and NgRx, optimizing overall performance by managing states on the frontend to significantly reduce backend server load. Furthermore, I utilized the company's internal design system to implement existing UI components and develop new, scalable user interfaces."
    },
    {
      company: "Morphosis Apps",
      href: "https://morphos.is",
      badges: ["Anuglar", "Ionic", "React"],
      location: "Bangkok, Thailand",
      title: "Front End Developer",
      logoUrl: "/morphosisapps_logo.jpeg",
      start: "July 2020",
      end: "October 2020",
      description:
        "I developed client-specific web and mobile apps on a project-by-project basis using modern frontend frameworks including Angular, Ionic, and React. I communicated closely with clients to understand their requirements and ensure the final systems perfectly suited their business needs. My work spanned diverse projects—such as an employment-focused social media platform and an on-demand helper mobile application—utilizing TypeScript, JavaScript, and SCSS."
    },
    {
      company: "CHAREON TUT CO., LTD (Outsource AIS)",
      badges: ["Angular", "Bootstrap"],
      href: "",
      location: "Bangkok, Thailand",
      title: "Frontend Web Developer",
      logoUrl: "/ct_logo.jpg",
      start: "February 2020",
      end: "June 2020",
      description:
        "I spearheaded frontend coding and development utilizing Angular, TypeScript, and SCSS. I took charge of designing and implementing highly responsive website layouts and components using Bootstrap 4. To ensure efficient code delivery and streamline team collaboration, I also adopted and managed GitFlow for our version control system.",
    },
    {
      company: "Refinitiv",
      href: "https://www.lseg.com",
      badges: ["Typescript", "Angular"],
      location: "Bangkok, Thailand",
      title: "Software Engineer",
      logoUrl: "/refinitiv_logo.jpg",
      start: "June 2018",
      end: "November 2019",
      description:
        " As a Software Engineer focusing on frontend development at Refinitiv (formerly Thomson Reuters), I developed an application for monitoring the stock market utilizing Angular and TypeScript. Working within a Thailand-based development team, I collaborated closely on a global scale, coordinating with Product Owners in the UK and QA specialists in India. To ensure a cohesive and standardized user interface, I strictly followed the company's internal design language by implementing and modifying proprietary Angular Polymer components.",
    },
  ],
  education: [
    {
      school: "King Mongkut's University of Technology Thonburi",
      href: "https://www.cpe.kmutt.ac.th",
      degree: "Bachelor of Engineering (B.Eng) in Computer Engineering",
      logoUrl: "kmutt_logo.jpg",
      start: "2014",
      end: "2018",
    },
    {
      school: "National Tsing Hua University",
      href: "https://isa.site.nthu.edu.tw",
      degree:
        "Master of Science by Institute of Information Systems and Applications (ISA)",
      logoUrl: "/nthu_logo.jpg",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [
    // workaroud: keep one to prevent built failed
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    // workaroud: keep one to prevent built failed
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
  ],
} as const;
