import React from "react";
import { Button, Form, Modal, FloatingLabel } from "react-bootstrap";

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
          <FloatingLabel controlId="floatingDesc" label="Description">
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              value={editedProduct.description}
              onChange={handleEditCHange}
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
