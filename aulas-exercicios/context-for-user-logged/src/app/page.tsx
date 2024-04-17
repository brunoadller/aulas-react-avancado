"uselient"
import Header from "@/components/Header"
import { ContextProvider } from "@/contexts/NameUserLogged"

const Home = () => {
  return (
   <div>
     <ContextProvider>
       <Header />
     </ContextProvider>
   </div>
  )
}
export default Home