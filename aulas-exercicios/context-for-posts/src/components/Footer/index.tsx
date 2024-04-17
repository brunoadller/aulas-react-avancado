import { PostContext } from '@/contexts/PostContext'
import React, { useContext } from 'react'

const Footer = () => {
  const postCtx = useContext(PostContext)
  return (
    <div className='text-md text-gray-400 '>
      Quantidade de Posts: {postCtx?.posts.length}
    </div>
  )
}

export default Footer