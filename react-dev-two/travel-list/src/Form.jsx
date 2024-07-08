import React, { useState } from "react";

const options = Array.from({ length: 20 }, (_, i) => i + 1);

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function onHandleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={onHandleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {options.map((i) => {
          return (
            <option value={i} key={i}>
              {i}
            </option>
          );
        })}
      </select>
      <input
        name="description"
        type="text"
        placeholder="Item..."
        value={description}
        onChange={onChangeDescription}
      />
      <button>Add</button>
    </form>
  );
}
