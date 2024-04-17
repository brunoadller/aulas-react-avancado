"use client"
import { listReducers } from '@/reducers/listReducers'
import React, { FormEvent, useReducer, useState } from 'react'

const Reducers = () => {
  const [addField, setAddField] = useState<string>('')

  //deposi da lista de reducer criada, criar o useReducer para utilizar as actions
  //recebe dois parametros:
  //1º- o proprio reducers ou seja, a função listReducer
  //2º- Lista original ou lista base, como começam os dados iniciais
  const [list, dispatch] = useReducer(listReducers, [])
  //o list representa a propria lista e o dispatch irá executar uma ação
  
  const handleAddButton = () => {
    if(addField.trim() === "") return false

    dispatch({
      type: 'add',
      payload:{
        text: addField.trim()
      }
    })

    setAddField("")
  }
  const handleAddKeyUp = (e: KeyboardEvent) => {
    if(addField.trim() === "") return false
    if(e.code === "Enter"){
      dispatch({
        type: 'add',
        payload: {
          text: addField.trim()
        }
      })
      setAddField("")
    }
  }
  const handleDoneCheckbox = (id:number) => {
    dispatch({
      type: 'toggleDone', 
      payload: {id}
    })
    
  }
  const handleEdit = (id: number) => {
    const item = list.find(it => it.id === id)

    if(!item) return false
    const newText = window.prompt("Editar tarefa", item.text)
    if(!newText || newText.trim() === ' ') return false

    dispatch({
      type: 'edit',
      payload: {
        id,
       newText
      }
    })
  }
  const handleRemove = (id: number) => {
    if(!window.confirm("Tem certeza que deseja excluir?")) return false
    dispatch({
      type: 'remove',
      payload: {
        id
      }
    })
  }
  
  return (

    <div className='container mx-auto text-white '>
      <h1 className='text-center text-4xl my-4'>Lista de Tarefas</h1>
      <div className='max-w-2xl bg-gray-900 rounded-md mx-auto flex border border-gray-400 p-4 my-4 '>
        <input type="text"
        placeholder='Digite um item'
        className='flex-1 rounded-md outline-none 
        border border-white p-3 bg-transparent
         text-white'
         value={addField}
         onKeyUp={handleAddKeyUp}
         onChange={e => setAddField(e.target.value)}
        />
        <button 
        className='p-4'
        onClick={handleAddButton}
        >ADICIONAR
        </button>
      </div>

    <ul className='max-w-2xl mx-auto'>
      {
        list.map(item => {
          return (
            <li 
            className='flex items-center p-3 my-3 border-b border-gray-700'
            key={item.id}
            >
              <input 
              type="checkbox" 
              checked={item.done}
              className='w-6 h-6 mr-4'
              onChange={() => handleDoneCheckbox(item.id)}
               />
              <p className={`flex-1 text-lg ${item.done? 'line-through': ''}`}>{item.text}</p>
              <button onClick={() => handleEdit(item.id)} className='mx-4 text-white hover:text-gray-500'>Editar</button>
              <button  onClick={() => handleRemove(item.id)} className='mx-4 text-white hover:text-gray-500'>Excluir</button>
            </li>
          )
        })
      }
    </ul>
    </div>
  )
}

export default Reducers