import React, { useState, useEffect } from "react";

export default function PublicationsList() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = () => {
      fetch("/api/publications")
        .then((res) => res.json())
        .then((publicationsData) => {
          // don't do this!
          setPublications(publicationsData.data);
          console.log("Fetched publications data:", publicationsData);
        });
    };

    fetchPublications();

    //clean up code
    return () => {};
  }, []);

  console.log("🎨 Rendering PublicationsList with publications:", publications);

  const renderPublications = () => {
    return !publications?.length ? (
      <div>Loading publications...</div>
    ) : (
      publications.map((pub) => (
        <li key={"publication_" + pub._id}>
          {pub.title} by {pub.author}
        </li>
      ))
    );
  };

  return (
    <div>
      <h2>Publications List</h2>
      <ul>{renderPublications()}</ul>
    </div>
  );
}
