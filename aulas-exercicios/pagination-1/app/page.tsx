"use client"


const Home = () => {
  
  
  return (
   <main className="my-4 flex  flex-col gap-3">
    <div className="w-full border-2 border-white p-4">
      <p>Págian Inicial: </p>
      <p>Página Final: </p>
      <div className="my-4 flex items-center gap-4">
        <button className="bg-white rounded-lg text-black font-bold p-2">Anterior</button>
        <button className="bg-white rounded-lg text-black font-bold p-2">Próxima</button>
      </div>
    </div>
    <div className="border-2 border-white w-full">
     
    </div>
   </main>
  )
}

export default Home