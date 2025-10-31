import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PublicationsList from "../components/PublicationsList.jsx";
import CreatePublicationForm from "../components/CreatePublicationForm.jsx";

export default function IndexPage() {
  return (
    <Container>
      <Row>
        <h1>Publication Manager frontend! ❤️</h1>
        <Col md={8} xs={12}>
          <PublicationsList />
        </Col>
        <Col md={4} xs={12}>
          <CreatePublicationForm />
        </Col>
      </Row>
    </Container>
  );
}
