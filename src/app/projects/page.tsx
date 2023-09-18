"use client"
import AnimatedText from "@/components/AnimatedText"
import { useTranslation } from "@/utils/context/Translation.context"

const Projects = () => {
    const {translations} = useTranslation()
    return <main className="flex w-full flex-col items-center justify-center relative h-[100%]">
        <div className="p-8 py-14">
            <AnimatedText text={translations.projects}/>

        </div>
    </main>
}

export default Projects