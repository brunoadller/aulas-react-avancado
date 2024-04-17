import { CountContext } from '@/contexts/CountContext'
import React, { useContext } from 'react'

const OnlineUsers = () => {
    const countCtx = useContext(CountContext)
    const handleBanAll = () => {
        countCtx?.setOnlineCount(0)
    }
  return (
    <div>
        <div>Online: {countCtx?.onlineCount}</div>
        <button onClick={handleBanAll}>Banir todo mundo</button>
    </div>
  )
}

export default OnlineUsers