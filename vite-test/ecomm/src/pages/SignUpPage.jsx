import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../services/toast.service";

function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const nav = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = {
      fullName,
      email,
      password,
    };

    try {
      const resp = await axios.post(
        "https://backend-mu-pied.vercel.app/users/register",
        data
      );

      if (resp.data.status) {
        nav("/");
        successToast(resp.data.message);
      }
    } catch (err) {
      errorToast(err.response.data.message);
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="Full Name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => setFullName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setemail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSignUp}>
        Submit
      </Button>
    </Form>
  );
}

export default SignUpPage;
