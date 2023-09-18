"use client"
import { useTranslation } from '@/utils/context/Translation.context';
import Link from 'next/link'
import React, { } from 'react'
import SocialIcons from './SocialIcons';
import Logo from './Logo';
import LanguageChanger from './LanguageChanger';

const NavBar = () => {
    const { translations } = useTranslation();
    // const router = useRouter()
    return (
        <div className='w-full font-medium flex  items-center p-3'>
            <div className='flex gap-12 text-xl ml-20 '>
                {navElements.map(el => {
                    return <Link href={el.link} key={el.text} className={`relative pt-5 group transition hover:text-syan`}>
                        {translations[el.text]}
                        <span className={`textSyan h-[2px] inline-block w-0 absolute left-0 bottom-0 group-hover:w-full bg-syan transition-[width] ease duration-300 `}></span>
                    </Link>
                    // ${router.asPath === el.link ? 'w-full' : 'w-0'}
                }
                )}
            </div>
            {/* <div className='absolute right-[150px] top-[36px]'>
                <SocialIcons />
            </div> */}
            <div className='absolute right-[100px] top-[48px]'>
            <LanguageChanger />
            </div>
            <div className='absolute right-[0] top-[20px] translate-x-[-50%]'>
                <Logo />
            </div>
        </div>
    )
}

export default NavBar

const navElements = [
    { text: "home", link: "/" },
    { text: "about", link: "/about" },
    { text: "skills", link: "/skills" },
    { text: "projects", link: "/projects" },
]