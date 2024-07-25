"use client"
import { ReactNode, createContext, useContext, useState } from "react";



type TypeStateContext = {
    value: number,
    setValue: (value: number) => void
}

const testeContext = createContext<TypeStateContext | null>(null)

type Props = {children: ReactNode}
export const TesteContextProvider = ({children}: Props) => {
    const [value, setValue] = useState(0)
    return (
        <testeContext.Provider value={{value, setValue}}>
            {children}
        </testeContext.Provider>
    )
}

export const useTeste = () => useContext(testeContext)