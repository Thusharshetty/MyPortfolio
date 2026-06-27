import { FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";

export const techBadges = [
    {
        name: "React",
        icon: FaReact,
        className: "top-[22px] -left-16 text-[#61DAFB] border-[#61DAFB]/30",
        delay: 0.2,
        duration: 4.2
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        className: "top-14 right-[-32px] text-black border-black/30",
        delay: 0.5,
        duration: 5
    },
    {
        name: "Redux",
        icon: SiRedux,
        className: "top-[180px] -left-28 text-[#764ABC] border-[#764ABC]/30",
        delay: 0.8,
        duration: 4.8
    },
    {
        name: "Tailwind",
        icon: SiTailwindcss,
        className: "top-[260px] right-[-64px] text-[#06B6D4] border-[#06B6D4]/30",
        delay: 1.1,
        duration: 5.5
    },
    {
        name: "Java",
        icon: FaJava,
        className: "bottom-[180px] -left-8 text-[#FF5733] border-[#FF5733]/30",
        delay: 1.8,
        duration: 6.0

    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        className: "bottom-[100px] right-[-48px] text-[#00ED64] border-[#00ED64]/30",
        delay: 1.4,
        duration: 4.7
    },
    {
        name: "Git",
        icon: FaGitAlt,
        className: "bottom-0 right-42 text-[#F05032] border-[#F05032]/30",
        delay: 1.7,
        duration: 5.8
    },
];



export const stats = [
    {
        value: "5+",
        label: "Projects"
    },
    {
        value: "150+",
        label: "DSA Problems"
    },
    {
        value: "2+",
        label: "Years Learning"
    }
];