import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";

const Counter = () => {
  let [count, setCount] = useState(10000000);
  const [student, setStudent] = useState("");

  //Side effect
  //COmponent first render/ every render
  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  });

  async function getAllProducts() {
    const resp = await axios.get("/products");
    setProduct(resp.data.products);
  }
  //Dependency array
  // useEffect( () => {
  //   console.log("Counter Component (First page render/load)");
  // getAllProducts();
  // }, []);
  // let count = 0;

  useEffect(() => {
    console.log("Specific state change ( render/load)");
  }, [count]);

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const decrement = (e) => {
    e.preventDefault();
    // setCount(count - 1);
    setStudent("Ram");
  };
  const reset = (e) => {
    e.preventDefault();
    // setCount(0);
    setStudent("Shyam");
  };

  return (
    <Card>
      {/* <CardHeader>
        <h1>Counter</h1>
      </CardHeader>
      <CardBody>
        <h4>{count}</h4>
        <h4>{student}</h4>
      </CardBody>
      <CardFooter>
        <Button variant="success" className="me-2" onClick={increment}>
          Increment
        </Button>
        <Button variant="warning" className="me-2" onClick={decrement}>
          Decrement
        </Button>
        <Button variant="danger" onClick={reset}>
          Reset
        </Button>
      </CardFooter> */}
    </Card>
  );
};

export default Counter;
