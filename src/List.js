import React from "react";
import Counter from "./Counter";

const List = ({ listItems }) => {
  return listItems.map((item, i) => {
    if (item && item.name && item.item) {
      return (
        <div key={i}>
          <h1>{item.item}</h1>
          <p>{item.name}</p>
          <hr className="rounded"></hr>
          <Counter />
        </div>
      );
    }
  });
};
export default List;
