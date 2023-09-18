import { useTranslation } from "@/utils/context/Translation.context"
import DetailContainer from "./DetailConteiner"

const Experience = () => {
    const { translations } = useTranslation()

    const data = [
        { company: translations.infosystems, link: "https://infosystems.mn/", position: translations.positionInfo, address: translations.ub, time: "2021/09 - 2023/09", work: translations.job1 },
        { company: translations.alpha, link: "http://www.alphatrans.mn/", position: translations.positionAlpha, address: translations.ub, time: "2020/05 - 2021/06", work: translations.job2 }
    ]

    return <DetailContainer data={data} text={translations.experience}/>
}

export default Experience