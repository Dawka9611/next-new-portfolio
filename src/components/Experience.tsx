import { useTranslation } from "@/utils/context/Translation.context"
import Detail from "./Detail"
import { useScroll, motion } from "framer-motion"
import { useRef } from "react"

const Experience = () => {
    const { translations } = useTranslation()
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return <div className="my-48">
        <h2 className="font-bold text-7xl mb-32 w-full text-start">
            {translations.experience}
        </h2>
        <div ref={ref} className="w-full mx-auto relative">
            <motion.div
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] min-h-[100%] bg-white origin-top" />
            <ul className="w-full flex flex-col items-start justify-between">
                <Detail
                    company={translations.infosystems}
                    position={translations.positionInfo}
                    companyLink="https://infosystems.mn/"
                    address={translations.ub}
                    time="2021/09 - 2023/09"
                    work={translations.job1}
                />
                <Detail
                    company={translations.alpha}
                    position={translations.positionAlpha}
                    companyLink="http://www.alphatrans.mn/"
                    address={translations.ub}
                    time="2020/05 - 2021/06"
                    work={translations.job2}
                />
            </ul>
        </div>
    </div>
}

export default Experience