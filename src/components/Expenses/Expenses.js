import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterYear, SelectedFilterYear] = useState("2020");

  const filterChangeHandler = (selectedFilterYear) => {
    SelectedFilterYear(selectedFilterYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          defaultFilterYear={filterYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
