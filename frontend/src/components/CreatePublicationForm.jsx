import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";

// const examplePub = {
//   title: "Cleopatra",
//   url: "http://opensource.org/justo/morbi/ut/odio.json?molestie=potenti&lorem=in&quisque=eleifend&ut=quam&erat=a&curabitur=odio&gravida=in&nisi=hac&at=habitasse&nibh=platea&in=dictumst&hac=maecenas&habitasse=ut&platea=massa&dictumst=quis&aliquam=augue&augue=luctus&quam=tincidunt&sollicitudin=nulla&vitae=mollis&consectetuer=molestie&eget=lorem&rutrum=quisque&at=ut&lorem=erat&integer=curabitur&tincidunt=gravida&ante=nisi&vel=at&ipsum=nibh&praesent=in&blandit=hac&lacinia=habitasse&erat=platea&vestibulum=dictumst&sed=aliquam&magna=augue&at=quam&nunc=sollicitudin&commodo=vitae&placerat=consectetuer&praesent=eget&blandit=rutrum&nam=at&nulla=lorem&integer=integer&pede=tincidunt&justo=ante&lacinia=vel&eget=ipsum&tincidunt=praesent&eget=blandit&tempus=lacinia&vel=erat&pede=vestibulum",
//   venue: "Ailane",
//   authors: [
//     { name: "Faith Tuckie", email: "ftuckie0@cam.ac.uk" },
//     { name: "Lucinda Shakshaft", email: "lshakshaft1@microsoft.com" },
//     { name: "Henry Lautie", email: "hlautie2@answers.com" },
//   ],
// };

export default function CreatePublicationForm({ fetchPublications }) {
  const [publication, setPublication] = useState({
    title: "",
    url: "",
    venue: "",
    authors: [{ name: "", email: "" }],
  });

  const attribHanlder = (attrib) => (e) => {
    // Update while keeping state inmmutable
    setPublication({ ...publication, [attrib]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting publication:", publication);
    const res = await fetch("/api/publications/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(publication),
    });
    if (res.ok) {
      console.log("Publication created successfully");
      // Clear the form
      setPublication({
        title: "",
        url: "",
        venue: "",
        authors: [{ name: "", email: "" }],
      });
      // Refresh the publications list
      fetchPublications();
    } else {
      console.error("Failed to create publication");
    }
  };

  console.log(
    "🎨 Rendering CreatePublicationForm with publication:",
    publication
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={publication.title}
          onChange={attribHanlder("title")}
          placeholder="Publication Title"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Url</Form.Label>
        <Form.Control
          type="text"
          value={publication.url}
          onChange={attribHanlder("url")}
          placeholder="Publication url"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
