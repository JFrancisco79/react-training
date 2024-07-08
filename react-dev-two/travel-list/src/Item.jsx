import React from "react";

export default function Item({ item, onDeleteItems, onToggleItem }) {
  const { description, quantity, packed, id } = item;

  function handleDeleteItem() {
    onDeleteItems(id);
  }

  function handeToggleItem() {
    onToggleItem(id);
  }

  return (
    <li>
      <input type="checkbox" value={packed} onClick={handeToggleItem} />
      <span style={{ textDecoration: packed ? "line-through" : "none" }}>
        {quantity} {description}
      </span>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}
