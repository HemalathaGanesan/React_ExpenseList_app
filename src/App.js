import { useState } from "react/cjs/react.development";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

function App() {
  const dummyExpenses = [
    { id: "1", title: "News Paper", amount: 10, date: new Date(2021, 0, 4) },
    { id: "2", title: "water", amount: 50, date: new Date(2021, 9, 5) },
    { id: "3", title: "milk", amount: 55, date: new Date(2021, 9, 9) },
    { id: "4", title: "chocolatew", amount: 100, date: new Date(2020, 8, 10) },
  ];

  const [expenses, setExpense] = useState(dummyExpenses);

  const savedExpenseHandler = (expense) => {
    setExpense((previousExpense) => {
      return [expense, ...previousExpense];
    });
  };
  return (
    <div>
      <NewExpenses getAddedExpense={savedExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
