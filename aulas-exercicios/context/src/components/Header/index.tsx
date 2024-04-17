import React, { useContext } from 'react'
import OnlineUsers from '../OnlineUsers'
import { CountContext } from '@/contexts/CountContext'

const Header = () => {
    const countCtx = useContext(CountContext)
  return (
    <div>
        <h1>Título da Página ({countCtx?.onlineCount})</h1>
        <OnlineUsers />
    </div>
  )
}

export default Header