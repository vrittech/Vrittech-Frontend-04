import "./App.css";
import { Routes, Route } from "react-router-dom";
import QuoteDisplay from "./components/Student";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import Products from "./pages/Products";
import AddProductForm from "./components/AddProductForm";
import SecureRoute from "./routes/SecureRoute";
import { GlobalContext } from "./context/GlobalContext";
import Counter from "./components/Counter";

//Secure Route

function App() {
  const students = [
    {
      id: 1,
      name: "Samaya",
    },
    {
      id: 2,
      name: "Ayush",
    },
    {
      id: 3,
      name: "Sashi",
    },
  ];

  const returnTotal = () => {
    return students.length;
  };
  return (
    <>
      <GlobalContext.Provider value={{ students, returnTotal }}>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="" element={<SecureRoute />}>
            <Route
              path="/products"
              element={<Products students={students} />}
            />
            <Route path="/quotes" element={<QuoteDisplay />} />
            <Route path="/product/add" element={<AddProductForm />} />
          </Route>
        </Routes>
      </GlobalContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
