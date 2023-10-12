import React from "react";
import { Button, Form, Modal, FloatingLabel } from "react-bootstrap";
import { returnDiscountAmount, returnTotal } from "../utils/helper";

const EditProduct = ({
  show,
  handleClose,
  editedProduct,
  handleEditCHange,
  editProduct,
}) => {
  return (
    <Modal show={show} handleClose={handleClose}>
      <Modal.Header closeButton>Edit Product Form</Modal.Header>

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
              value={editedProduct.thumbnail}
              onChange={handleEditCHange}
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
              value={editedProduct.title}
              onChange={handleEditCHange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingDesc"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              value={editedProduct.description}
              onChange={handleEditCHange}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingDesc"
            label="Discount Percentage"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="discountPercentage"
              placeholder="Discount Percentage"
              value={editedProduct.discountPercentage}
              onChange={handleEditCHange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="price" label="Sub Total" className="mb-3">
            <Form.Control
              type="text"
              readOnly
              value={"$" + editedProduct.price}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="Amount"
            label="Discount Amount"
            className="mb-3"
          >
            <Form.Control
              type="text"
              readOnly
              placeholder="Discount Amount"
              value={"$" + returnDiscountAmount(editedProduct)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="TOtal" label="TOtal" className="mb-3">
            <Form.Control
              type="text"
              readOnly
              placeholder=" TOtal"
              value={"$" + returnTotal(editedProduct)}
            />
          </FloatingLabel>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={(e) => editProduct(e)}>
          Edit Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProduct;
