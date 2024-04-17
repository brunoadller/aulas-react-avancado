import { useTheme } from '@/contexts/ThemeContext'
import React, {ReactNode } from 'react'

type Props = {children: ReactNode}

const Container = ({children}: Props) => {
    const themeCtx = useTheme()
  return (
    <div className={`w-full h-screen 
        ${themeCtx?.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}
    `}>

        <div className='container mx-auto'>
            {children}
        </div>
    </div>
  )
}

export default Container