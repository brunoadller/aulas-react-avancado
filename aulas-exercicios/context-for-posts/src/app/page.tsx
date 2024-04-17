"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ListPosts from "@/components/ListPosts"
import { ContextProvider } from "@/contexts/PostContext"

const Home = () => {
  return(
    <div className="container mx-auto">
      <h1 className="my-4 text-4xl">MyPostApp</h1>
      <ContextProvider>
        <Header/>
        <ListPosts />
        <Footer />
      </ContextProvider>
    </div>
  )
}
export default Home