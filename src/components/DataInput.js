import React, { useState } from "react";
import Submit from "./Submit";
import ClearList from "./ClearList";

const DataInput = (props) => {
  const [term, setTerm] = useState("");

  return (
    <form>
      <div className="form-group row mt-3 mx-1 justify-content-center">
        <div className="col-12 col-sm-6 me-1 mt-2">
          <input
            type="text"
            className="form-control"
            id="add-an-item"
            placeholder="Add an Item!"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
        <div className="col col-sm mt-2">
          <Submit
            onSubmit={() => {
              props.onSubmitButton(term);
              setTerm("");
            }}
          />
        </div>
        <div className="col col-sm mt-2">
          <ClearList onSubmit={props.onClearButton} />
        </div>
      </div>
    </form>
  );
};

export default DataInput;
