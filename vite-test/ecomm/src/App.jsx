import "./App.css";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import QuoteDisplay from "./components/Student";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/quotes" element={<QuoteDisplay />} />
      </Routes>
    </>
  );
}

export default App;
