'use client'
import { Post } from "@/types/Post"
import { usePost, usePosts, useUsers } from "@/utils/queries"
import { useState } from "react"


const Page = () => {
  const [enabled, setEnabled] = useState(false)
  const posts = usePosts(enabled)
  
  const handleEnabledClick = () => {
    setEnabled(!enabled)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-black text-2xl">Hello world</h1>

      {
        !enabled &&
        <button 
        onClick={handleEnabledClick} 
        className="border border-black  
        p-3 rounded-md m-3"
        >Carregar Posts</button>
      }
      
      {posts.isLoading && "Carregando..."}
      {posts.isFetching && "Está Carregando..."}
      {posts.data && 
      <ul>
        {posts.data.map((item: Post) => {
          return (
            <li key={item.id}>{item.title}</li>
          )
        })}
      </ul>
      }
    </div>
  )
}

export default Page 