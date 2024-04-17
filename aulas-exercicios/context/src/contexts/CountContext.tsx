import { ReactNode, createContext, useState } from "react";

///tipando o valor para poder alterar seu estado de contexto
type CountContextType = {
    onlineCount: number;
    setOnlineCount: (n: number) => void
}
//Context sendo criado
export const CountContext = createContext<CountContextType | null>(null);


//Criando Provider
type Props = {children: ReactNode}

export  const CountProvider = ({children}: Props) => {
    const [onlineCount, setOnlineCount] = useState(45);

    return (
        <CountContext.Provider value = {{onlineCount, setOnlineCount}}>
            {children}
        </CountContext.Provider>
    )
}
//Só colocar o provider e dentro os componentes que o receberão
