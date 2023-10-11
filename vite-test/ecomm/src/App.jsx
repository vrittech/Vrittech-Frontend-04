import "./App.css";
import { Routes, Route } from "react-router-dom";
import QuoteDisplay from "./components/Student";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import Products from "./pages/Products";
import AddProductForm from "./components/AddProductForm";
import SecureRoute from "./routes/SecureRoute";

//Secure Route

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="" element={<SecureRoute />}>
          <Route path="/products" element={<Products />} />
          <Route path="/quotes" element={<QuoteDisplay />} />
          <Route path="/product/add" element={<AddProductForm />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
