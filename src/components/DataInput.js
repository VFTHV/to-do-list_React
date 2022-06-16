import React, { useState } from "react";
import Submit from "./Submit";
import ClearList from "./ClearList";

const DataInput = () => {
  const [term, setTerm] = useState("");

  return (
    <form>
      <div className="form-group row mt-3 justify-content-center">
        <div className="col-auto mx-1">
          <input
            type="text"
            className="form-control"
            id="add-an-item"
            placeholder="Add an Item!"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
        <div className="col-auto mx-1">
          <Submit />
        </div>
        <div className="col-auto mx-1">
          <ClearList />
        </div>
      </div>
    </form>
  );
};

export default DataInput;
