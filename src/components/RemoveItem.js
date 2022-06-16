import React from "react";

const RemoveItem = (props) => {
  return (
    <React.Fragment>
      <button className="ms-3 btn btn-danger" onClick={props.onRemoveItem}>
        X
      </button>
      <button className="ms-1 btn btn-success" onClick={props.onRemoveItem}>
        Done
      </button>
    </React.Fragment>
  );
};

export default RemoveItem;
