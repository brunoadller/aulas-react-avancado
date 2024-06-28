"use client"
import { Position } from "@/app/type/Position";
import { Children, ReactNode, createContext, useContext, useState } from "react";



type CharacterContextType = {
    pos: Position,
    setPos: React.Dispatch<React.SetStateAction<Position>>
}

export const CharacterContext = createContext<CharacterContextType | null>(null)

type Props = {children: ReactNode}

export const CharacterContextProvider = ({children}: Props) => {
    const [pos, setPos] = useState<Position>({x: 3, y: 1})

    return(
        <CharacterContext.Provider value={{pos, setPos}}>
            {children}
        </CharacterContext.Provider>
    )
}

export const useCharacter =  () =>  useContext(CharacterContext)