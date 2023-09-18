import { useTranslation } from "@/utils/context/Translation.context"
import Detail from "./Detail"
import { useScroll, motion } from "framer-motion"
import { useRef } from "react"

interface DetailContainerProps {
    text?: string,
    data?: any[],
    className?: string,
    reference?: React.RefObject<any>;
}

const DetailContainer: React.FC<DetailContainerProps> = ({ text, data, className, reference }) => {
    const { translations } = useTranslation()
    // const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["start end", "center start"]
    })

    return <div className="my-48">
        <h2 className="font-bold text-7xl mb-32 w-full text-start">
            {text}
        </h2>
        <div ref={reference} className="w-full mx-auto relative">
            <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute left-9 top-0 w-[4px] min-h-[100%] bg-white origin-top" />
            <ul className="w-full flex flex-col items-start justify-between">
                {
                    data?.map((el, ind) => {
                        return <Detail
                            key={ind}
                            company={el.company}
                            position={el.position}
                            companyLink={el.link}
                            address={el.address}
                            time={el.time}
                            work={el.work}
                            className={className ?? ''}
                        />
                    })
                }
            </ul>
        </div>
    </div>
}

export default DetailContainer