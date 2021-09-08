import { useState } from "react/cjs/react.development";
import "../Styles/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [enterDate, setNewDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });
    // //if states depends on previous state value means we have to use this type of state update
    // setUserInput((previousState) => {
    //   return { ...previousState, enterTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
    // //if states depends on previous state value means we have to use this type of state update
    // setUserInput((previousState) => {
    //   return { ...previousState, enterAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
    // //if states depends on previous state value means we have to use this type of state update
    // setUserInput((previousState) => {
    //   return { ...previousState, enterDate: event.target.value };
    // });
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(enterDate),
    };

    props.getExpenseData(expenseData);
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            value={newAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-21"
            max="2022-06-15"
            value={enterDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
