import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kanokphan Thananchai",
  initials: "KT",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Thai frontend developer exploring Taiwan for my master's. On a journey from coding websites to machine learning!",
  summary:
    "Hi! I studied [Computer Engineering at KMUTT for my bachelor's](/#education). After that, I worked in Bangkok for [5 years as a front-end developer](/#work), mostly using Angular. I got the opportunity to study for [my master's in ISA at NTHU in Taiwan](/#education), which is where I am now. I really want to change my career path and become a machine learning engineer.",
  avatarUrl: "/me.jpeg",
  skills: ["Angular", "RxJS", "Typescript", "Python"],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "kp.thananchai@gmail.com",
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
        url: "mailto:kp.thananchai@gmail.com",
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
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Et semper amet curae facilisis sed litora tellus. Vel tellus volutpat etiam, volutpat pretium pretium quis sociosqu eleifend. Velit hac sociosqu lobortis lectus cursus?",
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
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Et semper amet curae facilisis sed litora tellus. Vel tellus volutpat etiam, volutpat pretium pretium quis sociosqu eleifend. Velit hac sociosqu lobortis lectus cursus?",
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
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Et semper amet curae facilisis sed litora tellus. Vel tellus volutpat etiam, volutpat pretium pretium quis sociosqu eleifend. Velit hac sociosqu lobortis lectus cursus?",
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
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Et semper amet curae facilisis sed litora tellus. Vel tellus volutpat etiam, volutpat pretium pretium quis sociosqu eleifend. Velit hac sociosqu lobortis lectus cursus?",
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
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Et semper amet curae facilisis sed litora tellus. Vel tellus volutpat etiam, volutpat pretium pretium quis sociosqu eleifend. Velit hac sociosqu lobortis lectus cursus?",
    },
  ],
  education: [
    {
      school: "King Mongkut's University of Technology Thonburi",
      href: "https://www.kmutt.ac.th",
      degree: "Bachelor of Engineering (B.Eng) in Computer Engineering",
      logoUrl: "kmutt_logo_full.jpg",
      start: "2014",
      end: "2018",
    },
    {
      school: "National Tsing Hua University",
      href: "https://www.nthu.edu.tw",
      degree:
        "Master of Science by Institute of Information Systems and Applications (ISA)",
      logoUrl: "/nthu_logo.jpg",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [],
  hackathons: [],
} as const;
