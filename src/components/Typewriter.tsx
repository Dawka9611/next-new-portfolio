import React from 'react';
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "Fullstack Developer",
                    "Frontend Heavy",
                    "Happy to join the your team",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};

export default TypeWriter;
