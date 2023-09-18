import { useTranslation } from "@/utils/context/Translation.context"
import Detail from "./Detail"
import { useScroll, motion } from "framer-motion"
import { useRef } from "react"
import DetailContainer from "./DetailConteiner"

const Courses = () => {
    const { translations } = useTranslation()

    const data = [
        { company: "udemy.com", link: "https://www.udemy.com/", position: "The Complete Web Development Course", address: "Online", time: "2021", work: "The only course you need to become a full-stack web developer. Covers HTML5, CSS3, JS, ES6, Node, APIs, Mobile & more" },
        { company: "udemy.com", link: "https://www.udemy.com/", position: "The complete React course", address: "Online", time: "2021", work: "Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced patterns" },
        { company: "udemy.com", link: "https://www.udemy.com/", position: "Python and Django with full stack web development", address: "Online", time: "2022", work: "Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django Framework" },
        { company: "edx.org", link: "https://www.edx.org/", position: "CS50's Introduction to Computer Science", address: "Online", time: "2021", work: "Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, Python, SQL, and JavaScript plus CSS and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming. The on-campus version of CS50x , CS50, is Harvard's largest course." },
    ]

    return <DetailContainer data={data} text={translations.courses} className="block !ml-0"/>

}

export default Courses