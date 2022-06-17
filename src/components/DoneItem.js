import React from "react";

const DoneItem = (props) => {
  return (
    <button onClick={props.onClick} className="ms-1 btn btn-success">
      Done
    </button>
  );
};

export default DoneItem;
