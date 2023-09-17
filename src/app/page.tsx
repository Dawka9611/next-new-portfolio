"use client"
import Image from 'next/image'
import book from '../../public/images/book.png'
import { useTranslation } from '@/utils/context/Translation.context';
import TypeWriter from '@/components/Typewriter';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import {FiExternalLink} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import HireMe from '@/components/HireMe';

export default function Home() {
  const { translations } = useTranslation();

  return (
    <div className="flex flex-col h-[fit-content] items-center justify-between relative">
      <div className='flex items-center justify-between w-full'>
        <div className='w-1/2 h-auto'>
          <Image src={book} alt='picture' className='w-full h-auto pt-10' />
        </div>
        <div className='w-1/2 flex flex-col items-start justify-center h-auto'>
          <AnimatedText text={translations.helloText} className=''/>
          <div className='text-[#0f9ca1] text-3xl font-bold py-3'>
            <TypeWriter />
          </div>
          <div className='text-xl py-2'>
            {translations.homeDesc}
          </div>
          <div className='flex items-center self-start mt-2 gap-10'>
            <Link href='cv.pdf'
              target={"_blank"}
              className='flex items-center gap-2 bg-white text-dark p-2.5 px-6 rounded-lg text-lg font-semibold transition hover:bg-[#0f9ca1]'
              download={true}>
              {translations.resume}
              <FiExternalLink className ="text-2xl"/>
            </Link>
            <Link href='mailto:udawaadulam9611@gmail.com'
              target={"_blank"}
              className='text-lg font-medium text-white underline transition hover:text-[#0f9ca1]'>
              {translations.contact}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
