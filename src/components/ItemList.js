import React from "react";
import RemoveItem from "./RemoveItem";

const ItemList = (props) => {
  return (
    <div className="row mt-5 justify-content-center">
      <ol className="list-group list-group-numbered col-7">
        {props.itemList.map((item, index) => {
          return (
            <li key={Math.random()} className="list-group-item">
              <span>{item}</span>
              <RemoveItem onRemoveItem={() => props.onRemoveItem(index)} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ItemList;
