"use client"
import Image from 'next/image'
import book from '../../public/images/book.png'
import { useTranslation } from '@/utils/context/Translation.context';
import AnimatedText from '@/components/AnimatedText';

export default function Home() {
  const { translations } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className='flex items-center justify-between w-full'>
        <div className='w-1/2'>
          <Image src={book} alt='picture' className='w-full h-auto'/>
        </div>
        <div className='w-1/2'>
          <div className=''>{translations.helloText}</div>
          <AnimatedText/>
          <div>{translations.homeDesc}</div>
        </div>
      </div>
    </div>
  )
}
