import PropTypes from "prop-types";

// Props in React are used to pass data from parent components to child components.
// They are read-only and help make components reusable and dynamic.
function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Status: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
}

export default Student;