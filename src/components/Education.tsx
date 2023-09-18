import { useTranslation } from "@/utils/context/Translation.context"
import Detail from "./Detail"
import { useScroll, motion } from "framer-motion"
import { useRef } from "react"

const Education = () => {
    const { translations } = useTranslation()
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return <div className="my-48">
        <h2 className="font-bold text-7xl mb-32 w-full text-start">
            {translations.edu}
        </h2>
        <div ref={ref} className="w-full mx-auto relative">
            <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-9 top-0 w-[4px] min-h-[100%] bg-white origin-top" />
            <ul className="w-full flex flex-col items-start justify-between">
                <Detail
                    company={translations.school}
                    position={translations.profession}
                    companyLink="https://must.edu.mn/mn//"
                    address={translations.ub}
                    time="2014 - 2018"
                    work={translations.job2}
                    className="block !ml-0"
                />
            </ul>
        </div>
    </div>
}

export default Education