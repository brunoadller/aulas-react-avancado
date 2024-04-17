'use client'
import { api } from "@/utils/api"
import axios from "axios"

const Home = () => {
  
  const handleAddPost = async () => {
    const response = await api.post('/posts',{
      userId: 98,
      title: 'titulo do post',
      body: 'Corpo do post'
    })
    

  }
  return (
    <div className="container mx-auto">
      <button onClick={handleAddPost}>Inserir Post</button>
    </div>
  )
}
export default Home