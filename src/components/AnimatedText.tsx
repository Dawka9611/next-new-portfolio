"use client"
import { useEffect } from 'react'
import styled from 'styled-components'

const AnimatedText = () => {
    return <div className=''>
        Frontend Developer ...
    </div>
}

export default AnimatedText

const TextStyle = styled.div`
  /* overflow: hidden;  */
  max-width: 200px;
  /* border-right: .15em solid orange;  */
  /* white-space: nowrap; */
  font-family: 'Open Sans', sans-serif;
  /* margin: 0 auto;  */
  letter-spacing: .15em; 
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
`