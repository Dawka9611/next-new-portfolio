"use client"
import { useTranslation } from '@/utils/context/Translation.context';
import Link from 'next/link'
import React, { useContext } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import SocialIcons from './SocialIcons';
const NavBar = () => {
    const { translations } = useTranslation();
    return (
        <div className='w-full font-medium flex justify-between'>
            {navElements.map(el => {
                return <Link href={el.link} key={el.text}>
                    {translations[el.text]}
                </Link>
            }
            )}
            <SocialIcons />
        </div>
    )
}

export default NavBar

const navElements = [
    { text: "home", link: "" },
    { text: "about", link: "" },
    { text: "projects", link: "" },
]