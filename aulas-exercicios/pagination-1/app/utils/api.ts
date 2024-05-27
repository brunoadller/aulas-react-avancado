import axios from "axios";
import { Posts } from "../types/Posts";



const req = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async (): Promise<Posts[]> => {
    const result = await req.get('/posts')
    return result.data
}
export const getPost = async (id: number): Promise<Posts> => {
    const result = await req.get(`/posts/${id}`)
    return result.data
}