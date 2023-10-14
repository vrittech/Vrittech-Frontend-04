import React, { useContext } from "react";
import { CardFooter, Button } from "react-bootstrap";
import ProductContext from "../context/ProductContext";
import { GlobalContext } from "../context/GlobalContext";

const CardFoot = ({ product, students }) => {
  const { editHandler, deleteHandler } = useContext(ProductContext);
  const data = useContext(GlobalContext);

  return (
    <CardFooter>
      {data.students[0].name}+{data.returnTotal()}
      {students[1].name}
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
  );
};

export default CardFoot;
