"use client"
import AnimatedText from "@/components/AnimatedText"
import { useTranslation } from "@/utils/context/Translation.context"
import profile from "../../../public/images/profile (2).png"
import React from "react"
import Image from "next/image"
import AnimatedNumbers from "@/components/AnimatedNumbers"
import Experience from "@/components/Experience"


const About = () => {
    const { translations } = useTranslation()
    return <div className="flex w-full flex-col items-center justify-center relative h-[100%]">
        <div className="p-8">
            <AnimatedText text={translations.aboutQuote} className="" />
            <div className="grid w-full grid-cols-8 gap-12 pt-8">
                <div className="col-span-3 flex flex-col items-start justify-start font-medium">
                    <h2 className="text-lg font-bold uppercase text-white">
                        {translations.biography}
                    </h2>
                    <p className="pt-4">
                        {translations.aboutP1}
                    </p>
                    <p className="pt-3">
                        {translations.aboutP2}
                    </p>
                </div>
                <div className="w-[320px] max-h-[320px] col-span-3 relative overflow-hidden pt-5">
                    <div className="whiteFrame rounded-xl">
                        <div className="bg-dark inset-[2px] bgDark absolute rounded-xl">
                            <Image src={profile} alt='profile' className="w-full h-auto" />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 text-xl flex flex-col justify-center items-stretch gap-5 text-4xl">
                    <p >
                        {/* <div className="text-4xl font-bold">50+</div> */}
                        <AnimatedNumbers value={50} />+
                        <div className="text-xl">
                            {translations.users}
                        </div>
                    </p>
                    <p >
                        {/* <div className="text-4xl font-bold">10+</div> */}
                        <AnimatedNumbers value={10} /> +
                        <div className="text-xl">
                            {translations.finishedPro}
                        </div>
                    </p>
                    <p >
                        {/* <div className="text-4xl font-bold">2+</div> */}
                        <AnimatedNumbers value={2} />+
                        <div className="text-xl">
                            {translations.experience}
                        </div>
                    </p>
                </div>
            </div>
            <div>
                <Experience />
            </div>
        </div>
    </div>
}

export default About