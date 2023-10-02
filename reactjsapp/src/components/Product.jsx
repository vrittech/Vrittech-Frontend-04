import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";
const Product = (props) => {
  return (
    <>
      <div className="d-flex flex-wrap gap-3">
        {props.products.map((product) => {
          return (
            <Card style={{ width: "30%", height: "450px" }} key={product.id}>
              <CardHeader style={{ height: "60%" }}>
                <Card.Img className="h-100" src={product.thumbnail}></Card.Img>
              </CardHeader>
              <CardBody>
                <h2>
                  {product.title.length > 6
                    ? product.title.slice(0, 5) + "..."
                    : product.title}
                </h2>
                <p>
                  {product.description.length > 16
                    ? product.description.slice(0, 15) + "..."
                    : product.description}
                </p>
              </CardBody>
              <CardFooter>
                <Button variant="primary" className="me-3">
                  View
                </Button>
                <Button variant="secondary" className="me-3">
                  Edit
                </Button>
                <Button variant="danger">Delete</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Product;
