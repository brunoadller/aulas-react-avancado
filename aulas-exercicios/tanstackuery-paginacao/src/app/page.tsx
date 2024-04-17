'use client'
import { usePosts } from '@/utils/queries'
import React, { useState } from 'react'

const Home = () => {
  const limit = 3
  const [page, setPage] = useState(0)
  const posts = usePosts(limit, page*limit)

  const hanldePrevButton = () => {
    setPage(page == 0 ? 0: page - 1)
  }
  const handleNextButton = () => {
    setPage(page + 1)
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-white text-3xl'>Opa, tudo bem?</h1>
      <div className='border border-white p-3 m-3'>
        <div>Itens por página: {limit}</div>
        <div>Número da página: {page}</div>
        <button className='border mx-2 p-2' onClick={hanldePrevButton}>Página anterior</button>
        <button className='border mx-2 p-2' onClick={handleNextButton}>Próxima Página</button>
      </div>
      {posts.isLoading && 'Carregando...'}
      
      {
        posts.data && 
        <ul>
          {posts.data.map(item => {
            return(
              <li key={item.id}>{item.title}</li>
            )
          })}
        </ul>
      }
    </div>
  )
}

export default Home