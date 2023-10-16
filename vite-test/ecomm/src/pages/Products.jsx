import axios from "axios";
import React, { useEffect, useId, useState } from "react";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import { errorToast } from "../services/toast.service";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProductForm";
import ProductContext from "../context/ProductContext";

const Products = ({ students }) => {
  const [products, setProducts] = useState([]);
  const [originalProduct, setOriginalProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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
      localStorage.setItem("products", JSON.stringify(data.products));
      setProducts(data.products);
      setOriginalProducts(data.products);

      const categories = data.products.map((product) => {
        return product.category;
      });
      const uniqueCategories = [...new Set(categories)];
      setCategories(uniqueCategories);
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

  function searchProduct(e) {
    const searchedData = originalProduct.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProducts(searchedData);
  }

  function filterProducts(data) {
    if (data !== "") {
      const filteredProd = originalProduct.filter((item) => {
        return item.category === data;
      });
      setProducts(filteredProd);
    } else {
      setProducts(originalProduct);
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ProductContext.Provider
            value={{ editHandler, deleteHandler, products }}
          >
            <div className="d-flex justify-content-between mb-5">
              <Button variant="info" onClick={showProduct}>
                Add Product
              </Button>
              <Form.Select
                style={{ width: "170px" }}
                size="sm"
                onChange={(e) => filterProducts(e.target.value)}
              >
                <option value="">Filter by category</option>
                {categories.map((category) => {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
                })}
              </Form.Select>
              <FloatingLabel
                controlId="floatingInput"
                label="Search product here"
              >
                <Form.Control
                  type="text"
                  name="searchKey"
                  onChange={searchProduct}
                />
              </FloatingLabel>
            </div>
            <div className="d-flex flex-wrap gap-4">
              {products.map((product) => {
                return (
                  <ProductList
                    key={product.id}
                    product={product}
                    students={students}
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
          </ProductContext.Provider>
        </>
      )}
    </>
  );
};

export default Products;
