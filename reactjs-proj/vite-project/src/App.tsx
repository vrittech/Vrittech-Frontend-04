import "./App.css";
import { Student, User } from "./interface/student.interface";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { object, string, number } from "yup";

import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  let num: number = 10;
  let str: string = "hello ok";
  let isActive: boolean = false;

  let student: Student = {
    name: "Nirajan",
    isAttended: false,
    address: {
      city: "KTM",
      postalCode: 44600,
    },
  };
  num = 10;

  const user: User = {
    id: 1,
    name: "Abc",
  };

  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const users: User[] = [
    { id: 1, name: "samaya" },
    { id: 2, name: "sashi" },
  ];

  interface errorInterface {
    emailErr: string;
    passErr: string;
  }

  const [err, setErr] = useState<errorInterface>({
    emailErr: "",
    passErr: "",
  });

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (email === "") {
      handleError("emailErr", "Please enter a email to continue");
    } else {
      handleError("emailErr", "");
    }
    if (password === "") {
      handleError("passErr", "Please enter a passwor to continue");
    } else {
      handleError("passErr", "");
    }

    if (validateEmail(email)) {
      console.log("valid email");
    } else {
      handleError("emailErr", "Please enter a valid email.");
    }
  };

  const validateEmail = (email: any) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  let productSchema = object({
    productName: string()
      .required("Product name is a required field")
      .min(5, "Minimum length of product name shuold be 5")
      .max(15, "Maximum length of product name shuold be 15"),
    price: number().required("Price required"),
    description: string()
      .notRequired()
      .min(5, "Minimum length of product desc shuold be 5")
      .max(15, "Maximum length of product desc shuold be 15"),
    email: number(),
  });

  const handleError = (key: string, value: string) => {
    setErr((prev) => {
      return { ...prev, [key]: value };
    });
  };
  return (
    <Card>
      {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="text-danger">{err.emailErr}</span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="text-danger">{err.passErr}</span>
        </Form.Group>

        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form> */}

      <Formik
        initialValues={{
          productName: "abc@gmail.com",
          price: "",
          description: "",
          email: "",
        }}
        validationSchema={productSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-2"
              placeholder="Enter product name"
              name="productName"
              onChange={handleChange}
              value={values.productName}
            />
            <ErrorMessage
              name="productName"
              component="span"
              className="text-danger mb-4"
            />
            <input
              className="form-control  mb-2"
              placeholder="Enter product price"
              name="price"
              onChange={handleChange}
            />
            <ErrorMessage
              name="price"
              component="span"
              className="text-danger mb-4"
            />
            <input
              className="form-control  mb-2"
              placeholder="Enter product description"
              name="description"
              onChange={handleChange}
            />
            <ErrorMessage
              name="description"
              component="span"
              className="text-danger mb-4"
            />
            <input
              className="form-control  mb-2"
              placeholder="Enter product email"
              name="email"
              onChange={handleChange}
            />
            <ErrorMessage
              name="email"
              component="span"
              className="text-danger mb-4"
            />

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </Card>
  );
}

export default App;
