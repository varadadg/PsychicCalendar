import React, { useRef } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Register = () => {
  const confirmPassword = useRef({});
  const {
    register,
    watch,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const validateConfirmPassword = (val) => {
    confirmPassword.current = val.target.value;
    const passwordValue = watch("Password");
    if (passwordValue !== confirmPassword.current) {
      setError("ConfirmPassword", {
        type: "manual",
        message: "Passwords don't match",
      });
    } else {
      clearErrors("ConfirmPassword");
    }
  };

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const onSubmit = (data) => {
    // Handle your form submission logic here
    console.log(data);
  };

  return (
    <Container fluid="md">
      <Row className="align-items-center">
        <Col>
          <Form.Label htmlFor="inputPassword5">Username</Form.Label>
          <Form.Control
            {...register("Username", { pattern: /^[A-z][A-z0-9-_]{3,23}$/ })}
          />
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            {...register("Password", {
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
            })}
          />
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col>
          <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
          <Form.Control
            {...register("ConfirmPassword", {
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
              required: true,
              onChange: validateConfirmPassword,
            })}
          />
          {errors.ConfirmPassword && (
            <div style={{ color: "red" }}>{errors.ConfirmPassword.message}</div>
          )}
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col>
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col>
          <Button onClick={handleSubmit(onSubmit)}>Sign Up</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
