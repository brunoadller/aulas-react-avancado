"use client"

import { Users } from "@/types/Users"
import { useEffect, useState } from "react"

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<Users[]>([])

  const getUsers = async () => {
   try{
    setLoading(true)
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await res.json()
    setUsers(json)
    
   }catch(e){
    console.log("Deu algo errado")
   }
   setLoading(false)
  }
  useEffect(() => {
    getUsers()
  },[])
  return(
    <div className="container mx-auto">
      <h1 className="text-3xl my-3">Lista de usuários</h1>
      {loading && 'Carregando...'}
      {!loading && users.length > 0 && 
        <ul>
          {users.map(item => {
            return (
              <li key={item.id}>{item.name} - ({item.address.city})</li>
            )
          })}
        </ul>
      }
      {!loading && users.length === 0 && <p>Erro ao carregar usuário...</p>}
    </div>
  )
}
export default Home