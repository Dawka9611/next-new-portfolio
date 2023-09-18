import React from 'react';
import { motion } from 'framer-motion'

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y:50
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration:1
        }
    }
}

interface AnimatedTextProps {
    text: string,
    className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
    return (
        <div className='fontAnton w-full mx-auto py-2 flex items-center justify-center overflow-hidden text-6xl'>
            <motion.div className={`w-full font-bold text-7xl flex flex-wrap ${className}`} variants={quote} initial='initial' animate="animate">
                {text.split(" ").map((word: string, index: number) => (
                    <motion.span key={index} variants={singleWord}>
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
};

export default AnimatedText;