import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import AboutPokemonPages from "../pages/AboutPokemonPages/index.jsx";

export default function AppRouter(){
    return(
        <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/about/:id' element = {<AboutPokemonPages/>} />
        </Routes>
    );
}