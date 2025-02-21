import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kanokphan Thananchai",
  initials: "KT",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer",
  summary:
    "",
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
        url: "https://www.linkedin.com/in/kp-thananchai/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [],
  education: [
    {
      school: "King Mongkut's University of Technology Thonburi",
      href: "https://kmutt.ac.th",
      degree: "Bachelor of Engineering (B.Eng) in Computer Engineering",
      logoUrl: "https://www.kmutt.ac.th/wp-content/uploads/2020/09/KMUTT_CI_Semi_Logo-normal-full-265x300.png",
      start: "2014",
      end: "2018",
    },
    {
      school: "National Tsing Hua University",
      href: "https://nthu.edu.tw",
      degree: "Master of Science by Institute of Information Systems and Applications (ISA)",
      logoUrl: "https://www.nthu.edu.tw//public/images/about10/cis-1-1.jpg",
      start: "2023",
      end: "Present",
    },
  ],
  projects: [],
  hackathons: [],
} as const;
