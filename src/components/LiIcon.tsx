import { GoDotFill } from 'react-icons/go';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

interface ListIconProps {
  reference: React.RefObject<any>; // Adjust the type of 'reference' as needed
}

const ListIcon: React.FC<ListIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"]
  });

  return (
    <figure className='absolute left-0 stroke-white'>
      <svg className='-rotate-90' width='75' height='75' viewBox='0 0 100 100'>
        {/* <circle cx='75' cy='50' r='20' className='stroke-white stroke-0 fill-none' /> */}
        <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] fill-syan' 
        style={{
            pathLength: scrollYProgress
        }}/>
        <circle cx='75' cy='50' r='10' className='stroke-1 fill-white' />
      </svg>
    </figure>
  );
};

export default ListIcon;