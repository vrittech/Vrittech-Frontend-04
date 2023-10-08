import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../services/toast.service";

function SignInPage() {
  // let email = "";
  // let password = "";

  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    axios
      .post("https://backend-mu-pied.vercel.app/users/login", data)
      .then((resp) => {
        console.log(resp);

        if (resp.data.status) {
          //navigate

          navigate("/quotes");

          successToast(resp.data.message);
        }
      })
      .catch((err) => {
        console.log("err", err.response.data.message);
        errorToast(err.response.data.message);
      });
  }
  return (
    <Card>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            // onChange={handleChange}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            // onChange={handleChange}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default SignInPage;
