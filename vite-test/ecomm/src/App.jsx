import "./App.css";
import { Routes, Route } from "react-router-dom";
import QuoteDisplay from "./components/Student";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/quotes" element={<QuoteDisplay />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
