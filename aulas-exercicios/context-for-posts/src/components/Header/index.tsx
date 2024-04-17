import { PostContext } from '@/contexts/PostContext'
import React, { useContext, useState } from 'react'

const Header = () => {
    const postCtx = useContext(PostContext)
    const [title, setTitle] = useState('')
    const [descriptions, setDescription] = useState('')

    const handleClickPost = () => {
     if(title && descriptions){
      postCtx?.dispatch({
        type: 'add',
        payload:{
          title: title,
          description: descriptions
        }
      })
     }
    
      setDescription('')
      setTitle('')
    }
  return (
    <div className='flex items-start gap-4 '>
        <input onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className='p-4 text-2xl flex-1 rounded-md text-gray-600 outline'
        type="text" placeholder='Informe o título' />
        <textarea
        value={descriptions}
        onChange={(e) => setDescription(e.target.value)}
        className='p-4 text-2xl flex-1 rounded-md text-gray-600 outline'
        placeholder="Seu post..." cols={30} rows={1}></textarea>
        <button onClick={handleClickPost} className=' bg-blue-700 p-5 rounded-md bg'>Postar</button>
    </div>
  )
}

export default Header