import React from "react";
import DataInput from "./components/DataInput";
import ItemList from "./components/ItemList";

class App extends React.Component {
  state = { itemList: ["study", "gym"] };

  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col text-center">
            <label htmlFor="add-an-item" className="fs-2 fw-bold">
              To-Do List
            </label>
          </div>
        </div>
        <DataInput />
        <ItemList itemList={this.state.itemList} />
      </div>
    );
  }
}

export default App;
