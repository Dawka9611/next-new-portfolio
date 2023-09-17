import { useTranslation } from "@/utils/context/Translation.context"

const Experience = () => {
    const { translations } = useTranslation()

    return <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
            {translations.experience}
        </h2>
        <div className="w-[75] mx-auto relative">
            <div>
                <h3>{translations.position}</h3>&nbsp;
                <a href="https://infosystems.mn/">{translations.infosystems}</a>
                <div>2021/09-2023/ | {translations.ub}</div>
                <div>
                    <div>
                        {translations.job1}
                    </div>
                    <div>
                        {translations.job2}
                    </div>
                    <div>
                        {translations.job3}
                    </div>
                    <div>
                        {translations.job4}
                    </div>
                    <div>
                        {translations.job5}
                    </div>
                    <div>
                        {translations.job6}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Experience