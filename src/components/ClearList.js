import React from "react";

const ClearList = (props) => {
  const onClick = (event) => {
    event.preventDefault();
    props.onSubmit();
  };

  return (
    <button type="submit" className="btn btn-primary" onClick={onClick}>
      Clear list
    </button>
  );
};

export default ClearList;
