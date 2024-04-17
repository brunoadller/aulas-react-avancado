import { postsData } from "@/data/Posts";
import { PostActions, postReducer } from "@/reducers/postReducer";
import { Dispatch, ReactNode, createContext, useReducer, useState } from "react";


type PostContextType = {
    posts: Posts[];
    dispatch: Dispatch<PostActions>
}

export const PostContext = createContext<PostContextType | null>(null)


type Props = {children: ReactNode}

export const ContextProvider = ({children}: Props) => {
    const [posts, dispatch] = useReducer(postReducer, [])

 
    return(
        <PostContext.Provider value = {{posts, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}