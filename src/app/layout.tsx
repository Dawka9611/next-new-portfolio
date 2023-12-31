"use client"
import styled from 'styled-components'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { TranslationProvider } from '@/utils/context/Translation.context'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dawka Protfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <TranslationProvider>
        <body className='w-full min-h-screen  flex justify-center items-start bg-dark p-10 text-gray-100 scroll-smooth relative'>
          <PageStyle className='box-border w-5/6 overflow-hidden  rounded-2xl relative'>
            <NavBar />
            {children}
            <div className='pt-20'>
              <Footer />
            </div>
            {/* </div> */}
          </PageStyle>
        </body>
      </TranslationProvider>
    </html>
  )
}

const PageStyle = styled.div`
        max-width: min(100%, 1500px);
        height: fit-content;
        background-color: ${p => p.theme.mainColorDarker};
        &::before{
            content: "";
            width:200%;
            min-height: 200%;
            position: absolute;
            background: linear-gradient(0deg, transparent, rgb(15, 156, 161)); 
            top: -60%;
            left: -60%;
            transform-origin: bottom right;
            animation: animate 6s linear infinite;
        }

    @keyframes animate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(220deg);
        }
    }
    .fontAnton{
      font-family: Antonio;
    }
    .whiteFrame{
      width: 100%;
      &::before{
            content: "";
            width:100%;
            min-height: 99%;
            position: absolute;
            background: linear-gradient(0deg, transparent, white); 
            top: -50%;
            left: -50%;
            transform-origin: bottom right;
            animation: animate 6s linear infinite;
        }
        &::before{
            content: "";
            width:100%;
            min-height: 100%;
            position: absolute;
            background: linear-gradient(0deg, transparent, white); 
            top: -60%;
            left: -60%;
            transform-origin: bottom right;
            animation: animate 6s linear infinite;
            animation-delay: -2s;
        }
    }
`