import { PostContext, usePosts } from '@/contexts/PostContext'
import React, { useContext } from 'react'

const PostList = () => {
  const postCtx = usePosts()
  return (
    <div>
      {
        postCtx?.posts.map(item => {
          return (
            <div key={item.id} className='p-3 border-b border-gray-500'>
              <div className='text-xl font-bold mb-2'>{item.title}</div>
              <div className='text-sm'>{item.body}</div>
              <button onClick={() => postCtx?.removePost(item.id)}>Remover</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostList