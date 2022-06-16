import React from "react";

const Submit = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit();
  };
  return (
    <button type="submit" className="btn btn-primary" onClick={onSubmit}>
      Submit
    </button>
  );
};

export default Submit;
