import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import NavigationBar from "../components/NavigationBar.jsx";

import { UserContext } from "../context/UserContext.jsx";

export default function BaseTemplate({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const res = await fetch("/auth/getUser");
      if (res.ok) {
        const data = await res.json();
        console.log("Authenticated user:", data.user);
        setUser(data.user);
      } else {
        console.log("User not authenticated");
        setUser(null);
      }
    }

    getUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Container>
        <NavigationBar user={user} />
        {children}
        <footer> Made by John with ❤️ </footer>
      </Container>
    </UserContext.Provider>
  );
}
