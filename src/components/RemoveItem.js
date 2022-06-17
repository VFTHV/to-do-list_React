import React from "react";

const RemoveItem = (props) => {
  return (
    <React.Fragment>
      <button className="ms-3 btn btn-danger" onClick={props.onRemoveItem}>
        X
      </button>
    </React.Fragment>
  );
};

export default RemoveItem;
