import React from "react";

export default function Stats({ items }) {
  const numItems = items.length;

  if (!numItems)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const numPacked = items.filter((item) => item.packed).length;
  const progress = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {progress === 100
          ? `You got everything! Ready to go`
          : `🍹You have ${numItems} items in your list, and you already packed
          ${numPacked} (${progress}%)`}
      </em>
    </footer>
  );
}
