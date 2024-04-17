'use client'

import { User } from "@/types/User"
import { useEffect, useState } from "react"

const Home = () => {
  const [users, setUsers] = useState<User[]>([])
  const [responseError, setResponseError] = useState(true)

  //Fetch API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json)
    })
    .catch(() => {
     console.log("Deu erro")
    })
    .finally(() => {
      setResponseError(false)
      console.log("TERMINOU TODA REQUISIÇÃO")
    })
    
  },[])


  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">Lista de usuários</h1>
      {responseError && "Carregando..."}
      {
        !responseError && users.length > 0 && (
          <ul>
            {users?.map(item => {
              return(
                <li key={item.id}>{item.name} ({item.address.city})</li>
              )
            })}
  
          </ul>
        )
      }
      {!responseError && users.length === 0 && (<p>Erro ao obter usuários</p>)}
    </div>
  )
}

export default Home