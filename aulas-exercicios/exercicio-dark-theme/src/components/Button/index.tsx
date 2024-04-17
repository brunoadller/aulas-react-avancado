import { useTheme } from '@/contexts/ThemeContext'
import React from 'react'
type Props = {
    label: string
    onClick: () => void
}
const Button = ({label, onClick}: Props) => {
    const themeCtx = useTheme()
  return (
    <div>
        <button className={`border px-4 py-3 rounded-md
            ${themeCtx?.theme === 'dark' ? 
                'bg-white text-black':
                'bg-black text-white'
            }
        `}
        onClick={() => onclick}
        >
            {label}
        </button>
    </div>
  )
}

export default Button