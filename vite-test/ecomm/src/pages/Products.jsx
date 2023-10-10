import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import { errorToast } from "../services/toast.service";
import { Button } from "react-bootstrap";
import AddProduct from "../components/AddProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  // let products = [];
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const URL = import.meta.env.VITE_BACKEND_URL;

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(URL + "product");
      // const users = await axios.get(URL + "students");

      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      errorToast(error.response.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = (e, id) => {
    e.preventDefault();
    const filteredProds = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(filteredProds);
  };

  const showProduct = (e) => {
    e.preventDefault();
    setShow(true);
  };

  function handleClose() {
    setShow(false);
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Button variant="info" onClick={showProduct}>
            Add Product
          </Button>
          <div className="d-flex flex-wrap gap-4">
            {products.map((product) => {
              return (
                <ProductList product={product} deleteHandler={deleteHandler} />
              );
            })}
          </div>
          <AddProduct show={show} handleClose={handleClose} />
        </>
      )}
    </>
  );
};

export default Products;
