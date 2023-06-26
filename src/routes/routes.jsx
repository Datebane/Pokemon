import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import AboutPokemonPages from "../pages/AboutPokemonPages/index.jsx";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<AboutPokemonPages />} />
      </Routes>
    </>
  );
};

export default AppRouter;
