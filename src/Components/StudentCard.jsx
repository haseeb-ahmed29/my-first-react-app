function StudentCard(props) {
  return (
    <div
      style={{
        border: '1px solid #35d457',
        padding: '15px',
        margin: '10px',
        borderRadius: '10px'
      }}
    >
      <h2>Student Card</h2>

      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Subject:</strong> {props.subject}</p>
    </div>
  );
}

export default StudentCard;