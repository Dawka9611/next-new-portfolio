import { useTranslation } from "@/utils/context/Translation.context"
import Detail from "./Detail"
import { useScroll, motion } from "framer-motion"
import { useRef } from "react"
import DetailContainer from "./DetailConteiner"

const Education = () => {
    const { translations } = useTranslation()
    const data = [
        { company: translations.school, link: "https://must.edu.mn/", position: translations.profession, address: translations.ub, time: "2014 - 2018", work: translations.job2 },
    ]
    const text = translations.edu

    return <DetailContainer data={data} text={text} className="block !ml-0"/>
}

export default Education