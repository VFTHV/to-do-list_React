import React from "react";

const ItemList = (props) => {
  return (
    <div className="row mt-5 justify-content-center">
      <ol className="list-group list-group-numbered col-7">
        {props.itemList.map((item) => {
          return (
            <li key={Math.random()} className="list-group-item">
              <div className="row d-inline-block">
                <div className="col">{item}</div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ItemList;
