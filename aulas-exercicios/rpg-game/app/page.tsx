import Map from "./src/components/Map";
import { CharacterContextProvider } from "./src/contexts/Character";
import { TesteContextProvider } from "./src/contexts/Teste";

const Home = () => {
  return (
   <div className="">
    <TesteContextProvider>
      <Map />
    </TesteContextProvider>
   </div>
  )
}

export default Home;