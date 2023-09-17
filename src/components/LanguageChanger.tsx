import { useTranslation } from "@/utils/context/Translation.context";
import { useState } from "react";
import eng from '../../public/images/gb.svg'
import mon from '../../public/images/mn.svg'
import Image from "next/image";


const LanguageChanger = () => {
    const { changeLanguage } = useTranslation();
    const [language, setLanguage] = useState('en')

    const handleChange = () => {
        if (language === 'en') {
            setLanguage('mn')
            changeLanguage('mn')
        } else {
            setLanguage('en')
            changeLanguage('en')
        }
    }

    return <div className=" text-dark rounded-full flex justify-center items-center overflow-hidden">
        {language === 'en' && <div onClick={() => handleChange()} className="">
            <Image src={eng} alt='EN' className="w-10" />
        </div>}
        {language === 'mn' && <div onClick={() => handleChange()} className="bg-white text-dark">
            <Image src={mon} alt='MN'className="w-10"/>
        </div>}
    </div>
}
export default LanguageChanger