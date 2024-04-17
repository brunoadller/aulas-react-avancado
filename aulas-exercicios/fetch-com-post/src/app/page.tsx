'use client'
import { Users } from "@/types/Users"
import { useEffect, useState } from "react"

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUser] = useState<Users[]>([])
  
  const getUser = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await response.json()
      setUser(json)
    }catch(e){
      console.log(e)
    }
    setLoading(false)

  }
  const handleAddNewPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json; charset=UTF-8'
      },
      body:JSON.stringify({
        title: 'Post de teste',
        body: 'Corpo de teste',
        userId: 99
      })
    })
    const json  = await res.json()
    console.log(json)
  }
  useEffect(() => {
    getUser()
  },[])

  return (
    <div className="container mx-auto">
      <button
      className="border border-gray-500 rounded-md p-3 my-3"
      onClick={handleAddNewPost}
      >Adicionar novo post</button>
      <h1 className="my-3 text-3xl">Lista de usuários</h1>
      {loading && 'Carregando...'}
      {!loading && users.length > 0 &&
        <ul>
          {
            users?.map(item => {
              return (
                <li key={item.id}>{item.name} - ({item.address.city})</li>
              )
            })
          }
        </ul>
      }
      {!loading && users.length === 0 && <p>Erro ao carregar o usuário...</p>}
    </div>
  )
}
export default Home