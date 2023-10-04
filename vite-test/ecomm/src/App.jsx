import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
