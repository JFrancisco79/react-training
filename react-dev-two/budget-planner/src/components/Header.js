import { useState } from "react";

export default function Header({ expenses }) {
  const [editBudget, setEditBudget] = useState(false);
  const [budget, setBudget] = useState("");
  const totalExpenses = expenses.reduce((total, data) => total + data.cost, 0);
  const remainingBudget = budget - totalExpenses;

  function handleEditBudget(e) {
    e.preventDefault();
    setEditBudget((prev) => !prev);
  }

  return (
    <>
      <div className="row mt-3">
        <div className="col-sm">
          <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
            <span>Budget: </span>
            <input
              name="budget"
              type="number"
              value={budget}
              className="form-control mr-3"
              disabled={!editBudget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
            <button onClick={handleEditBudget} className="btn btn-primary">
              {editBudget ? "Save" : "Edit"}
            </button>
          </div>
        </div>
        <div className="col-sm">
          <div className={`alert p-4 alert-success`}>
            <span>Remaining: £{remainingBudget}</span>
          </div>
        </div>
        <div className="col-sm">
          <div className="alert alert-primary p-4">
            <span>Spent so far: £{totalExpenses}</span>
          </div>
        </div>
      </div>
    </>
  );
}
