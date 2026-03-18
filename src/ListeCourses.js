function ListeCourses({ elements }) {
  return (
    <ul>
      {elements.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListeCourses;