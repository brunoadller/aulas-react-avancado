import { postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Post"
import { ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react"

const STORAGE_KEY = 'postContextContent'
type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void
    removePost: (id: number) => void
}

export const PostContext = createContext<PostContextType | null>(null)

type Props = {children: ReactNode}

export const PostProvider = ({children}: Props) => {
    const [posts, dispatch] = useReducer(
        postReducer, 
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))//parse irá verificar se existe o item, se não retornará vazio
    //uitlizando o useeffect para salvar as informações sem perdê-las
    //foram salvas no local storage
    //stringfy transforma a todo o objeto em strig para savar no localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, 
            JSON.stringify(posts)
        )
    },[posts])

    const addPost = (title: string, body: string) => {
        //setPosts([...posts, {id: posts.length, title, body}])
        dispatch({
            type: 'add',
            payload: {title,body}
        })
    }
    const removePost = (id: number) => {
        dispatch({
            type: 'remove',
            payload: {id}
        })
    }
    return(
        <PostContext.Provider value={{posts, addPost, removePost}}>
            {children}
        </PostContext.Provider>
    )
}

export const usePosts = () => useContext(PostContext)