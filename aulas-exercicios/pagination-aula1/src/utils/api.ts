import {Post} from "@/types/Post"

import axios from "axios"

const req = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async ():
Promise<Post[]> => (await req.get(`/posts`)).data