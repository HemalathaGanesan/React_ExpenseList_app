import { useState } from "react/cjs/react.development";
import "../Styles/Expenses.css";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";


function Expenses(props) {
  const [filterValue, selectFilter] = useState("2020");
  const FilterChangeHandler = (selectedYear) => {
    selectFilter(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterValue;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterValue}
          onChangeFilter={FilterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
