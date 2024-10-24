import { Routes,Route } from "react-router-dom"
import Pokedex from "../compnents/Pokedex/Pokedex"
import PokemonDetails from "../compnents/PokemonDetails/PokemonDetails"
function CustomRoutes(){

      return(
        <>
        <Routes>
       <Route path="/" element={<Pokedex/>}/>
       <Route path="/pokemon/:id" element={<PokemonDetails/>} />
        </Routes>
        
        </>

      )


}
export default CustomRoutes