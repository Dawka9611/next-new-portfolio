import Link from "next/link"
import SocialIcons from "./SocialIcons"
import { useTranslation } from "@/utils/context/Translation.context"
import HireMe from "./HireMe"

const Footer = () => {
    const { translations } = useTranslation()
    return <div className=" w-full font-medium text-lg">
        <HireMe />
        <div className="absolute right-[60px] bottom-[70px]"><SocialIcons /></div>
        <div className="p-4 flex items-center justify-center absolute right-[40%] bottom-[10px]">
            <div>{new Date().getFullYear()} &copy; {translations.copyRight}</div>
        </div>
    </div>
}

export default Footer