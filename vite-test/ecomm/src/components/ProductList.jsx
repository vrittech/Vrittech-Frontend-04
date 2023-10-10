import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";

const ProductList = ({ product, deleteHandler, editHandler }) => {
  return (
    <Card style={{ width: "30%", height: "450px" }}>
      <CardHeader style={{ height: "60%" }}>
        <Card.Img className="h-100" src={product.thumbnail}></Card.Img>
      </CardHeader>
      <CardBody>
        <h2>
          {product.title.length > 10
            ? product.title.slice(0, 9) + "..."
            : product.title}
        </h2>
        {/* <p>{product.description}</p> */}
      </CardBody>
      <CardFooter>
        <Button variant="primary" className="me-3">
          View
        </Button>
        <Button
          variant="secondary"
          className="me-3"
          onClick={(e) => editHandler(e, product.id)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={(e) => deleteHandler(e, product.id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductList;
