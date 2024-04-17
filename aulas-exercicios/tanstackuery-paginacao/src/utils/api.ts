import { Post } from "@/types/Posts";
import axios from "axios";




const req = axios.create({
    baseURL:  'https://jsonplaceholder.typicode.com'
})

export const getPosts = async (limit:number, start: number):
 Promise<Post[]> => (await req.get(`/posts?_limit=${limit}&_start=${start}`)).data 