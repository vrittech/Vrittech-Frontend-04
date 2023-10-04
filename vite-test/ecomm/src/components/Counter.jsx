import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";

const Counter = () => {
  //usestate
  let [count, setCount] = useState(0);
  // let count = 0;

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <Card>
      <CardHeader>
        <h1>Counter</h1>
      </CardHeader>
      <CardBody>
        <h4>{count}</h4>
      </CardBody>
      <CardFooter>
        <Button variant="success" className="me-2" onClick={increment}>
          Increment
        </Button>
        <Button variant="warning" className="me-2">
          Decrement
        </Button>
        <Button variant="danger">Reset</Button>
      </CardFooter>
    </Card>
  );
};

export default Counter;
