import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import { errorToast } from "../services/toast.service";
import { Button } from "react-bootstrap";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProductForm";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    title: "",
    thumbnail: "",
    description: "",
  });

  // let products = [];
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});
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

    // navigate("/product/add");
  };

  function handleClose() {
    setShow(false);
  }

  const handleChange = (e) => {
    setProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value, id: Date.now() };
    });
  };

  const addProductHandler = (e) => {
    e.preventDefault();

    // products.unshift(product);
    // console.log(products);
    //API call

    setProducts([product, ...products]);
    setShow(false);
  };

  function handleCloseEdit() {
    setShowEdit(false);
  }

  const editHandler = (e, id) => {
    e.preventDefault();

    // find

    const prod = products.find((product) => product.id === id);

    setEditedProduct(prod);

    setShowEdit(true);
  };

  function handleEditCHange(e) {
    setEditedProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function editProduct(e) {
    e.preventDefault();
    //API CALL - response true
    const updatedProd = products.map((product) => {
      return product.id === editedProduct.id ? editedProduct : product;
    });
    setProducts(updatedProd);
    setShowEdit(false);
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
                <ProductList
                  key={product.id}
                  product={product}
                  deleteHandler={deleteHandler}
                  editHandler={editHandler}
                />
              );
            })}
          </div>
          <AddProduct
            show={show}
            handleClose={handleClose}
            handleChange={handleChange}
            addProductHandler={addProductHandler}
          />
          <EditProduct
            show={showEdit}
            handleClose={handleCloseEdit}
            editedProduct={editedProduct}
            handleEditCHange={handleEditCHange}
            editProduct={editProduct}
          />
        </>
      )}
    </>
  );
};

export default Products;
