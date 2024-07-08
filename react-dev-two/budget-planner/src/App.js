import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ExpensesList from "./components/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(newExpense) {
    setExpenses((prev) => [...prev, newExpense]);
  }

  function handleDeleteExpense(id) {
    setExpenses((data) => data.filter((a) => a.id !== id));
  }
  return (
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <Header expenses={expenses} />
      <h3 className="mt-3"> Expenses</h3>
      <ExpensesList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm onAddExpenses={handleAddExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
