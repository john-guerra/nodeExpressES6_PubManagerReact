export default function PublicationsList({ publications }) {
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
