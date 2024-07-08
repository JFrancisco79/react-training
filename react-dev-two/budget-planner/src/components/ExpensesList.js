import { TiDelete } from "react-icons/ti";

export default function ExpensesList({ expenses, onDeleteExpense }) {
  return (
    <>
      <ul className="list-group mt-3 mb-3">
        {expenses.map((data) => {
          return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {data.name}
              <div>
                <span>{data.cost}</span>
                <TiDelete onClick={() => onDeleteExpense(data.id)} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
