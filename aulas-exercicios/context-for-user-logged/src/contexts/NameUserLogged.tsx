import { ReactNode, createContext, useState } from "react";

type NameUserLoggedContextType = {
    nameUser: string;
    setNameUser: (name: string) => void
}

export const ContextNameUser = createContext<NameUserLoggedContextType | null>(null)


type Props = {children: ReactNode} 

export const ContextProvider = ({children}:Props) => {
    const [nameUser, setNameUser] = useState('Felipe')
    return(
        <ContextNameUser.Provider value={{nameUser, setNameUser}}>
            {children}
        </ContextNameUser.Provider>
    )
}