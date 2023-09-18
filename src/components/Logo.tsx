import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

const Logo = () => {
    return <div className="flex items-center justify-center mt-2">
        <MotionLink href="/" className="h-14 w-14 bg-syanGlass text-dark flex justify-center items-center rounded-full text-2xl font-bold"
        initial="bg-syan"
        whileHover={{
            backgroundColor:["rgba(15, 156, 161,0.8)", "rgba(131,58,180,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "rgba(15, 156, 161,0.8)"],
            transition: {duration:3, repeat: Infinity}
        }}
        >
            DV
        </MotionLink>
    </div>
}

export default Logo