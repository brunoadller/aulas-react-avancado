import Image from 'next/image'
import React from 'react'
import character from '../../../assets/char.png'
import { useCharacter } from '../../contexts/Character'


const Character = () => {
  const posCtx = useCharacter()
  const size = 30
  const  left = 30
  const top = 30

  return (
    <div 
    className={
      `absolute
      bg-red-700`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}px`,
        top: `${top}px`
      }}>
      </div>
  )
}

export default Character
