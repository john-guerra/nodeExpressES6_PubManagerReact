import Container from "react-bootstrap/Container";

import NavigationBar from "../components/NavigationBar.jsx";

export default function BaseTemplate({ children }) {
  return (
    <Container>
      <NavigationBar />
      {children}
      <footer> Made by John with ❤️ </footer>
    </Container>
  );
}
