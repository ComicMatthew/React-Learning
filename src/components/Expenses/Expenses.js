import "./Expenses.css";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");

  const saveYearDataHandler = (enteredYear) => {
    console.log(enteredYear);
    setfilteredYear(enteredYear);
  };

  const filteredList = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  // Tutaj logika do najkrotsyej formy z zmienna expense Content

  // let expensesContent = <p>No Expense found</p>;

  // if (filteredList.length > 0) {
  //   expensesContent = filteredList.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveYear={saveYearDataHandler}
        />
        <ExpensesChart expenses={filteredList}/>
        <ExpensesList items={filteredList} />

        {/* Trzy metody renderowania conditional. Inne wyfiltrowane.

        --------------------------------------------------------------------- */}

        {/* {expensesContent} */}

        {/* --------------------------------------------------------------------- */}

        {/* {filteredList.length === 0 && <p>No Expense found</p>}
        
        {filteredList.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* ---------------------------------------------------------------------           */}

        {/* {filteredList.length === 0 ? (
          <p>No Expense found</p>
        ) : (
          filteredList.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* ----------------------------------------------------------------- */}

        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        /> */}

        {/* =---------------------------------------------------------- */}
      </Card>
    </div>
  );
}

export default Expenses;
