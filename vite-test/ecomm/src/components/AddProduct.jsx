import React, { useContext } from "react";
import { Button, Form, Modal, FloatingLabel } from "react-bootstrap";
import ProductContext from "../context/ProductContext";

const AddProduct = ({ show, handleClose, handleChange, addProductHandler }) => {
  const data = useContext(ProductContext);
  console.log(data);
  return (
    <Modal show={show} handleClose={handleClose}>
      <Modal.Header closeButton>
        Add Product Form || Total Products({data.products.length})
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Image"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Product Image"
              name="thumbnail"
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTitle"
            label="Title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="title"
              placeholder="Product Title"
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingDesc" label="Description">
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={addProductHandler}>
          Add Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProduct;
