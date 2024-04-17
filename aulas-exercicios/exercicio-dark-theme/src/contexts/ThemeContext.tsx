import { ReactNode, createContext, useContext, useEffect, useState } from "react"
const STORAGE_KEY = 'themeContextKey'

type ThemeContext = {
    theme: string,
    setTheme: (value: string) => void,
}


export const ThemeContext = createContext<ThemeContext | null>(null)

type Props = {children: ReactNode}

export const ThemeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState(
        localStorage.getItem(STORAGE_KEY) || 'light'
    )
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => useContext(ThemeContext)