"use client"
import { Position } from "@/app/type/Position";
import { ReactNode, createContext, useContext, useState } from "react";



type CharacterContextType = {
    pos: Position,
    setPos: React.Dispatch<React.SetStateAction<Position>>
}

const characterContext = createContext<CharacterContextType | null>(null)

type Props = {children: ReactNode}

export const CharacterContextProvider = ({children}: Props) => {
    const [pos, setPos] = useState<Position>({x: 3, y: 1})

    return(
        <characterContext.Provider value={{pos, setPos}}>
            {children}
        </characterContext.Provider>
    )
}

export const useCharacter = () => useContext(characterContext)

