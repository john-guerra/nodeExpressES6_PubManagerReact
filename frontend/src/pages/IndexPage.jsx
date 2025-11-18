import React, { useState, useEffect, useCallback } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PublicationsList from "../components/PublicationsList.jsx";
import CreatePublicationForm from "../components/CreatePublicationForm.jsx";

import { useUser } from "../context/UserContext.jsx";

export default function IndexPage() {
  const [publications, setPublications] = useState([]);
  const user = useUser();

  const fetchPublications = useCallback(() => {
    fetch("/api/publications")
      .then((res) => res.json())
      .then((publicationsData) => {
        // don't do this!
        setPublications(publicationsData.data);
        console.log("Fetched publications data:", publicationsData);
      });
  }, []);

  useEffect(() => {
    fetchPublications();

    //clean up code
    return () => {};
  }, [fetchPublications]);

  return (
    <>
      <Row>
        <h1>Publication Manager frontend! ❤️</h1>
        <Col md={8} xs={12}>
          <PublicationsList publications={publications} />
        </Col>

        <Col md={4} xs={12}>
          {user ? (
            <CreatePublicationForm fetchPublications={fetchPublications} />
          ) : (
            <p>Please log in to create publications.</p>
          )}
        </Col>
      </Row>
    </>
  );
}
