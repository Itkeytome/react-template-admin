import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC } from "react";
import Index from "../views/home";
import Exception from "../views/exception";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Index />}></Route>
        <Route path="/index" element={<Index />}></Route>
        <Route path="*" element={<Exception />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
