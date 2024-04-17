import { ContextNameUser } from '@/contexts/NameUserLogged'
import React, { useContext } from 'react'

const Header = () => {
    const nameCtx = useContext(ContextNameUser)
  return (
    <div className='container mx-auto'>
        <h1>Usuario: {nameCtx?.nameUser}</h1>
        <button onClick = {() => nameCtx?.setNameUser("Bruno")}>Mudar Usuario</button>
    </div>
  )
}

export default Header