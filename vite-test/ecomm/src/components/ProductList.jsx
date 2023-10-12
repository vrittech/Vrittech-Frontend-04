import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";
import { returnDiscountAmount, returnTotal } from "../utils/helper";

const ProductList = ({ product, deleteHandler, editHandler }) => {
  return (
    <Card style={{ width: "30%", height: "auto" }}>
      <CardHeader className="h-50 w-100">
        <Card.Img className="h-100" src={product.thumbnail}></Card.Img>
      </CardHeader>
      <CardBody>
        <h2>
          {product.title.length > 10
            ? product.title.slice(0, 9) + "..."
            : product.title}
        </h2>
        <p>
          <b>SubTotal:</b>${product.price}
        </p>
        <p>
          <b>Discount(%):</b>
          {product.discountPercentage}%
        </p>
        {/* Formula: discount% of S.P. = 10% of 2000 = 10 * 2000 * 0.01 =200*/}
        <p>
          <b>Discount Amount:</b>${returnDiscountAmount(product)}
        </p>
        <p>
          <b>Total:</b>${returnTotal(product)}
        </p>
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
