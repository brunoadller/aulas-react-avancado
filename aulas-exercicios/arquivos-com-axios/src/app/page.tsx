'use client'

import axios from "axios"
import { useRef } from "react"



const Home = () => {
  const fileInput = useRef<HTMLInputElement>(null)
  
  const handleSendFile = async () => {
    if(fileInput.current?.files && fileInput.current.files.length > 0){
      const file = fileInput.current.files[0]

      const data = new FormData()
      data.append('name', 'bonieky')
      data.append('file', file)

      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
      console.log(response.data)
    }
  }
  
  
  
  return(
    <div className="container mx-auto">
      <input ref={fileInput} type="file" />
      <button onClick={handleSendFile}>Enviar</button>
    </div>
  )
}
export default Home