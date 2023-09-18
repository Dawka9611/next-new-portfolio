import React, { useRef } from 'react';
import { motion } from 'framer-motion'
import ListIcon from './LiIcon';

interface DetailProps {
    position?: string,
    company?: string,
    companyLink?: string,
    time?: string,
    address?: string,
    work?: string,
    className?: string
}

const Detail: React.FC<DetailProps> = ({ position, company, companyLink, time, address, work, className }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 fiest:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between '>
            <ListIcon reference={ref} />
            <motion.div className='flex flex-col gap-2'
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl '>
                    {position}&nbsp;
                    <a href={companyLink} target="_blank" className={`underline text-syan ml-2 ${className}`} >{company}</a>
                </h3>
                <span className='capitilize font-medium text-gray-500'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

export default Detail;