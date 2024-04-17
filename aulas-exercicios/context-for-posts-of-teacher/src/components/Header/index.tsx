import { usePosts } from '@/contexts/PostContext'
import React, {  useState } from 'react'

const Header = () => {
  const postCtx =  usePosts()
  const [titleInput, setTitleInput] = useState<string>('')
  const [bodyInput, setBodyInput] = useState<string>('')
  const handleAddButton = () => {
    if(titleInput && bodyInput){
      postCtx?.addPost(titleInput, bodyInput)
      setTitleInput('')
      setBodyInput('')

    }
  }
  return (
    <div>
      <h1 className='text-3xl'>Título da Página</h1>

      <div className='my-4 max-w-xl flex gap-3 flex-col border border-dotted border-gray-400 p-3'>
        <input 
        onChange={(e) => setTitleInput(e.target.value)}
        className='border border-gray-300 p-2 text-black text-xl'
        type="text" 
        value={titleInput}
        placeholder='Digite um título' />
        <textarea 
        value={bodyInput}
        onChange={(e) => setBodyInput(e.target.value)}
        className='h-24 border border-gray-300 p-2 text-black text-xl'
        placeholder='Digite um corpo'></textarea>
        <button 
        onClick={handleAddButton}
        className='bg-blue-500 p-3 text-white rounded-md'
        >Adicionar</button>
      </div>
    </div>
  )
}

export default Header