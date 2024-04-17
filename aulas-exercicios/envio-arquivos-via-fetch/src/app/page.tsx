"use client"
import { useRef, useState } from "react"

const Home = () => {
  const [legendInput, setLegendInput] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)


  const handleFileSend = async () => {
    //verifica se eu tenho um arquivo
    if(fileInputRef.current?.files && fileInputRef.current.files.length > 0){
     //arquivo que foi mandado com os detalhes
      const fileItem = fileInputRef.current.files[0]
      //Existem arquivos ou seja, types que são aceitos pelo input
      //com imagens pode ser:
      //image/jpg
      //image/jpeg
      //image/png
      //image/gif
      const allowed = ['image/jpg', 'image/jpeg', 'image/png']
      if(allowed.includes(fileItem.type)){
        //adicionando os arquivos para upload
        const data = new FormData()
        data.append('image', fileItem)
        data.append('legend', legendInput)
        //fazendo o upload do arquivo
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'multipart/form-data'
          },
          body: data
        })
        const json = await res.json()
        console.log(json)
      }else{
        alert("Arquivo inconpatível")
      }

    }else{
      alert("Selecione um arquivo")
    }
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl">Upload de Imagem</h1>

      <div className="max-w-md flex flex-col gap-3 border border-dotted border-white p-3 mt-4">
        <input 
        ref={fileInputRef}
        type="file"
          
        />
        <input 
          type="text"
          value={legendInput}
          onChange={e => setLegendInput(e.target.value)}
          placeholder="Digite uma legenda"
          className="p-3 bg-white rounded-md text-black outline-none"
          />
        <button onClick={handleFileSend}>Enviar Imagem</button>
      </div>
    </div>
  )
}
export default Home