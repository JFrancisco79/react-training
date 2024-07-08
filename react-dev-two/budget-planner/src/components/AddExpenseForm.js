import { useState } from "react";

export default function AddExpenseForm({ onAddExpenses }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  function handleAddExpenseFormSubmit(e) {
    e.preventDefault();
    if (!name || !cost) return;
    onAddExpenses({
      name,
      cost,
      id: crypto.randomUUID(),
    });
    setName("");
    setCost("");
  }

  return (
    <>
      <form onSubmit={handleAddExpenseFormSubmit}>
        <div className="row">
          <div className="col-sm col-lg-4">
            <label>Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-sm col-lg-4">
            <label>Cost:</label>
            <input
              className="form-control"
              value={cost}
              type="number"
              onChange={(e) => setCost(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </>
  );
}
