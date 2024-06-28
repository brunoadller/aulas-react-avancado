"use clinet"
import Image from 'next/image'
import React from 'react'
import map from '../../../assets/map.png'
import Character from '../Character'
import { CharacterContextProvider } from '../../contexts/Character'

const Map = () => {
  return (
    <div className='relative'>
      <CharacterContextProvider>
        <Image src={map} 
          width={480}
          height={480}
          className='bg-left bg-top bg-auto absolute'
          alt='map' />
        <Character />
       </CharacterContextProvider>
    </div>
  )
}

export default Map
