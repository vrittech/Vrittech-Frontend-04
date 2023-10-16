import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "../slice/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counterReducer.count;
  });

  return (
    <Card>
      <CardHeader>
        <h1>Counter</h1>
      </CardHeader>
      <CardBody>
        <h4>{count}</h4>
      </CardBody>
      <CardFooter>
        <Button
          variant="success"
          className="me-2"
          onClick={(e) => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          variant="warning"
          className="me-2"
          onClick={(e) => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button variant="danger" onClick={(e) => dispatch(reset())}>
          Reset
        </Button>
        <input
          type="number"
          className="form-control mt-4"
          placeholder="Enter a number here"
          onChange={(e) => dispatch(incrementByValue(e.target.value))}
        />
      </CardFooter>
    </Card>
  );
};

export default Counter;
