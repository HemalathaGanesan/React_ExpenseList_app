import { useState } from "react/cjs/react.development";
import "../Styles/NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const [isEditing, setEditing] = useState(false);
  const GetExpenseDataHandler = (expenses) => {
    const expenseData = {
      ...expenses,
      id: Math.random().toString(),
    };
    props.getAddedExpense(expenseData);
  };
  const startEditHandler = () => {
    setEditing(true);
  };
  const stopEditHandler = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditHandler}>Add New Expenses</button>
      )}
      {isEditing && (
        <ExpenseForm
          getExpenseData={GetExpenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
