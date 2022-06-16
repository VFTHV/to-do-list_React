import React from "react";
import DataInput from "./components/DataInput";
import ItemList from "./components/ItemList";

class App extends React.Component {
  state = { itemList: [] };

  onItemAdd = (newItem) => {
    if (newItem.length === 0) {
      return;
    }
    const newItemList = this.state.itemList;
    newItemList.push(newItem);
    this.setState({ itemList: newItemList });
  };

  onClearList = () => {
    const newItemList = [];
    this.setState({ itemList: newItemList });
  };

  onRemoveItem = (index) => {
    const newItemList = this.state.itemList;
    newItemList.splice(index, 1);
    this.setState({ itemList: newItemList });
  };

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
        <DataInput
          onSubmitButton={this.onItemAdd}
          onClearButton={this.onClearList}
        />
        <ItemList
          itemList={this.state.itemList}
          onRemoveItem={this.onRemoveItem}
        />
      </div>
    );
  }
}

export default App;
