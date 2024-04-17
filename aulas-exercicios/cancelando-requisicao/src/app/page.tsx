'use client'
import axios from "axios"

const Home = () => {
  const controller = new AbortController()

  const handleStartRequest  = async () => {
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
      signal: controller.signal
    })
    }catch(e){
      console.log("Problema encontrado")
    }
  }
  const handleCancelRequest = () => {
    controller.abort()
  }
  return(
    <div className="container mx-auto flex gap-3">
        <button onClick={handleStartRequest}>Fazer</button>
        <button onClick={handleCancelRequest}>Cancelar</button>
    </div>
  )
}

export default Home