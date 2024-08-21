'use client'
import { usePosts } from "@/utils/queries"
import { useState } from "react"


const Home = () => {
  const limit = 3
  const [page, setPage] = useState(0)
  const posts = usePosts()

  const handlePrevButton = () => {
    setPage(page === 0 ? 0 : page - 1)
  }
  const handleNextButton = () => {
    setPage(page + 1)
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-white text-3xl">Opa, tudo bem?</h1>
      

      <div className=" flex flex-col justify-start items-start gap-3 border border-white p-3 m-3">
        <div>Items por página: {limit}</div>
        <div>Número da página: {page}</div>
        <button className="border p-3" onClick={handlePrevButton}>Página Anteriror</button>
        <button className="border p-3" onClick={handleNextButton}>Próxima Página</button>
      </div>
      {!posts.isLoading && posts.isFetching && "Está Recarregando..."}
      {
        posts.data && 
          <ul>
            {posts.data.map(item => {
              return (
                <li key={item.id}>{item.title}</li>
              )
            })}
          </ul>
      }
    </div>
  )
}

export default Home