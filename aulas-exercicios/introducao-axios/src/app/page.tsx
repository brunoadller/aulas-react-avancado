"use client"

import axios from "axios"

const Home = () => {
  const requestParams = {
    postId: 1,
    sort: 'desc'
  }
  const handleGetPosts = async () => {
    /*
    axios.get('https://jsonplaceholder.typicode.com/comments', {
      params:requestParams
    })
    .then((response) => {
      console.log(response.data)
    })
    */
   const res = await axios.get('https://jsonplaceholder.typicode.com/comments', {
    params: requestParams
   })
   console.log(res.data)
  }
  return (
    <div className="container mx-auto">
      <button onClick={handleGetPosts}>Pegar Posts</button>
    </div>
  )
}
export default Home