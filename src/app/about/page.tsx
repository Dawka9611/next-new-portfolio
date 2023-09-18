"use client"
import AnimatedText from "@/components/AnimatedText"
import { useTranslation } from "@/utils/context/Translation.context"
import profile from "../../../public/images/profile (2).png"
import React from "react"
import Image from "next/image"
import AnimatedNumbers from "@/components/AnimatedNumbers"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Courses from "@/components/Courses"


const About = () => {
    const { translations } = useTranslation()
    return <div className="flex w-full flex-col items-center justify-center relative h-[100%]">
        <div className="p-8 py-14">
            <AnimatedText text={translations.aboutQuote} className="" />
            <div className="grid w-full grid-cols-8 gap-12 pt-8 justify-center">
                <div className="col-span-4 flex flex-col items-start justify-start font-medium pl-4 text-left">
                    <h2 className="text-xl font-bold uppercase text-white">
                        {translations.biography}
                    </h2>
                    <p className="pt-4">
                        {translations.aboutP1}
                    </p>
                    <p className="pt-3">
                        {translations.aboutP2}
                    </p>
                </div>
                <div className="col-span-2" >
                    <div className="w-[250px] h-[280px]  relative overflow-hidden pt-5 rounded-xl">
                        <div className="whiteFrame rounded-xl">
                            <div className="bg-dark inset-[2px] bgDark absolute rounded-xl">
                                <Image src={profile} alt='profile' className="w-full h-full rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col justify-center items-stretch gap-5 text-4xl pl-2">
                    <p >
                        <AnimatedNumbers value={50} />+
                        <div className="text-xl"> {translations.users} </div>
                    </p>
                    <p >
                        <AnimatedNumbers value={10} /> +
                        <div className="text-xl"> {translations.finishedPro} </div>
                    </p>
                    <p >
                        <AnimatedNumbers value={2} />+
                        <div className="text-xl"> {translations.experience} </div>
                    </p>
                </div>
            </div>
            <Experience />
            <Courses />
            <Education />
            <div className="h-12"></div>
        </div>
    </div>
}

export default About
