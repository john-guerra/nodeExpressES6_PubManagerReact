import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginPage() {
  return (
    <>
      <h1>Sign in</h1>

      <Form action="/auth/login/password" method="post">
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            autoComplete="username"
            required=""
            autoFocus=""
            defaultValue="john"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="current-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter password"
            required=""
            defaultValue="secret"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
