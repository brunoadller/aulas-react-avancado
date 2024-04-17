import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts, getUsers } from "./api";


export const usePosts = (enabled?: boolean) => useQuery({
    networkMode: 'always',
    queryKey: ['posts'],
    queryFn: getPosts,
    enabled
})
    

export const usePost = (id: number) => useQuery(
    {
        queryKey: ['posts', id], 
        queryFn: () => getPost(id),
        enabled: false
    })

export const useUsers = () => useQuery({queryKey: ['users'], queryFn: getUsers})