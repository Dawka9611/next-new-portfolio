import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion'


interface AnimatedNumbersProps {
    value: number,
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0)
    const spiringValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref)
    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        spiringValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [])
    return (
        <span ref={ref} className='text-4xl font-bold'></span>
    );
};

export default AnimatedNumbers;