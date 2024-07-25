
import Image from 'next/image'
import React from 'react'
import map from '../../../assets/map.png'
import { useTeste } from '../../contexts/Teste'


const Map = () => {
  const testeCtx = useTeste()
  return (
    <div className='relative'>
        <Image src={map} 
          width={480}
          height={480}
          className='bg-left bg-top bg-auto absolute'
          alt='map' />
        <div>
          Valore o contexto teste: {testeCtx?.value}
        </div>
    </div>
  )
}

export default Map
