import React from "react";
import RemoveItem from "./RemoveItem";
import DoneItem from "./DoneItem";

const ItemList = (props) => {
  return (
    <div className="row mt-3 justify-content-center mx-1">
      <ol className="list-group list-group-numbered">
        {props.itemList.map((item, index) => {
          return (
            <li key={Math.random()} className="list-group-item">
              <span
                style={{ textDecoration: item.done ? "line-through" : "none" }}
              >
                {item.action}
              </span>
              <RemoveItem onRemoveItem={() => props.onRemoveItem(index)} />
              <DoneItem onClick={() => props.itemDone(index)} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ItemList;
