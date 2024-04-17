import {usePosts } from '@/contexts/PostContext'
import React from 'react'

const Footer = () => {
  const postCtx = usePosts()
  return (
    <div>
      Total de posts: {postCtx?.posts.length}
    </div>
  )
}

export default Footer