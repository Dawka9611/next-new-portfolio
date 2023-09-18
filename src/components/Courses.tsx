import { useTranslation } from "@/utils/context/Translation.context"
import Detail from "./Detail"
import { useScroll, motion } from "framer-motion"
import { useRef } from "react"

const Courses = () => {
    const { translations } = useTranslation()
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return <div className="my-48">
        <h2 className="font-bold text-7xl mb-32 w-full text-start">
            {translations.courses}
        </h2>
        <div ref={ref} className="w-full mx-auto relative">
            <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-9 top-0 w-[4px] min-h-[100%] bg-white origin-top" />
            <ul className="w-full flex flex-col items-start justify-between">
                <Detail
                    position="The Complete Web Development Course"
                    companyLink="https://www.udemy.com/"
                    address="Online"
                    company="udemy.com"
                    time="2021"
                    className="block ml-0"
                    work="The only course you need to become a full-stack web developer. Covers HTML5, CSS3, JS, ES6, Node, APIs, Mobile & more"
                />
                <Detail
                    position="The complete React course"
                    companyLink="https://www.udemy.com/"
                    address="Online"
                    company="udemy.com"
                    time="2021"
                    className="block ml-0"
                    work="Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced patterns"
                />
                <Detail
                    position="Python and Django with full stack web development"
                    companyLink="https://www.udemy.com/"
                    address="Online"
                    company="udemy.com"
                    time="2022"
                    className="block ml-0"
                    work="Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django"
                />
                <Detail
                    position="CS50's Introduction to Computer Science"
                    companyLink="https://www.edx.org/"
                    address="Online"
                    company="edx.org"
                    time="2023"
                    className="block ml-0"
                    work="Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, Python, SQL, and JavaScript plus CSS and HTML. Problem sets inspired by real-world domains of biology, cryptography, finance, forensics, and gaming. The on-campus version of CS50x , CS50, is Harvard's largest course."
                />
            </ul>
        </div>
    </div>
}

export default Courses