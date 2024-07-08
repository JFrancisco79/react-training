import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortItems = [];

  if (sortBy === "input") sortItems = items;
  else if (sortBy === "description")
    sortItems = items.slice().sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
  else if (sortBy === "packed")
    sortItems = items.slice().sort((a, b) => {
      return Number(a.packed) - Number(b.packed);
    });

  function handleClearList() {
    onClearList();
  }

  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by packed Status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
