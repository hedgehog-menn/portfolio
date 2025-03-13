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
  skills: [
    "Angular",
    "RxJS",
    "Typescript",
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
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
      logoUrl: "https://cdn.adlinktech.com/webupd/en/Upload/logo-brand-guidelines/Vertical%20without%20Slogan%20FC%20(3)_24112713530484813.jpg",
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
      logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQHFm07UkgElyg/company-logo_100_100/company-logo_100_100/0/1719827406274/allianz_technology_logo?e=1749686400&v=beta&t=0ZVH4XlAHuqYFa5_I_oDt3Jm0L0_pljMUOKLv9L2vbc",
      start: "November 2020",
      end: "August 2023",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Et semper amet curae facilisis sed litora tellus. Vel tellus volutpat etiam, volutpat pretium pretium quis sociosqu eleifend. Velit hac sociosqu lobortis lectus cursus?",
    },
    {
      company: "Morphosis",
      href: "https://morphos.is",
      badges: ["Anuglar", "Ionic", "React"],
      location: "Bangkok, Thailand",
      title: "Front End Developer",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQGVQ1W8mUeGwQ/company-logo_100_100/company-logo_100_100/0/1656494969047/morphosisapps_logo?e=1749686400&v=beta&t=UNweTsT0GDFxxhXgviHL27ONO30G1FYNWW23uc5l2PQ",
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
      logoUrl: "https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/270625016_1481582842239037_4827699251456166383_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=k05tbSGGKH0Q7kNvgFkYmKa&_nc_oc=Adjj1eWd4llorWYA4LO7JQ-7PWbVQ7Z8bComVYSkiF9KYhoMK5OqmF1sQC7EojIFEAw&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=AQp0NGgnNAtZ10THlvEgkqK&oh=00_AYF8AkwSvREPyXLrOHNhusKIEYfjzMso5mFB9-8hk1OOnw&oe=67D6E71E",
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
      logoUrl: "https://pbs.twimg.com/profile_images/1572139458144894977/DupEcblQ_400x400.jpg",
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
      logoUrl: "https://www.kmutt.ac.th/wp-content/uploads/2020/09/KMUTT_CI_Semi_Logo-normal-full-265x300.png",
      start: "2014",
      end: "2018",
    },
    {
      school: "National Tsing Hua University",
      href: "https://www.nthu.edu.tw",
      degree: "Master of Science by Institute of Information Systems and Applications (ISA)",
      logoUrl: "https://www.nthu.edu.tw//public/images/about10/cis-1-1.jpg",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [],
  hackathons: [],
} as const;
