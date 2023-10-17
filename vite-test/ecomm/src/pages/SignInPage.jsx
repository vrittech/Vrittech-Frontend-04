import axios from "axios";
import { useId, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../services/toast.service";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";

function SignInPage() {
  // let email = "";
  // let password = "";

  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const id = useId();

  const navigate = useNavigate();

  const dispatch = useDispatch();

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

    // Authentication -> Correct user is trying to access the resource/page -> authenticated
    // Authorization -> Correct role after user is authenticated

    axios
      .post("https://backend-mu-pied.vercel.app/users/login", data)
      .then((resp) => {
        if (resp.data.status) {
          //navigate
          dispatch(login(resp.data.data.jwt));

          navigate("/products");

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
            id={id}
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
