import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddProduct = ({ show, handleClose }) => {
  return (
    <Modal show={show} handleClose={handleClose}>
      <Modal.Header closeButton>
        <Form>
          <Form.Control placeholder="Enter title" />
          <Form.Control placeholder="Enter description" />
        </Form>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProduct;
