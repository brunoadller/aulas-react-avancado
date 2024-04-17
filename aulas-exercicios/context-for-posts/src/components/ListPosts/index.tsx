import { PostContext } from '@/contexts/PostContext'
import React, { useContext } from 'react'

const ListPosts = () => {
  const postCtx = useContext(PostContext)
  
  const handleClickRemove = (id: number) => {
    postCtx?.dispatch({
      type: 'remove',
      payload:{id}
    })
  }
  return (
    <div className='w-full text-lg'>
        {
          postCtx?.posts?.map((post, index) => {
            return(
              <div className = "my-4 flex items-start gap-3 border-b-2 border-gray-600" key={index}>
                <div className='flex-1'>
                  <h1 className='text-2xl font-bold'>{post.title}</h1>
                  <p className='my-3'>{post.description}</p>
                </div>
                <button onClick={() => handleClickRemove(post.id)} className='bg-blue-500 rounded-md p-2'>Remover post</button>
              </div>
            )
          })
        }
    </div>
  )
}

export default ListPosts
