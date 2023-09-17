import Image from 'next/image'
import svg from '../../public/images/circleImage.png'
import Link from 'next/link'
import { useTranslation } from '@/utils/context/Translation.context';

const HireMe = () => {
    const { translations } = useTranslation();

    return <div className='w-[120px] h-[120px] absolute left-8 bottom-8'>
        <Image src={svg} alt='Hire me' className='animate-spin-slow' />
    </div>
}

export default HireMe