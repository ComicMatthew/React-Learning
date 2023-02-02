import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const showForm = () => {
    setExpenseButton(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        closeFormFunction={closeForm}
      />
    );
  };

  let [expenseButton, setExpenseButton] = useState(
    <button onClick={showForm}>Add New Expense</button>
  );

  const closeForm = () => {
    setExpenseButton(<button onClick={showForm}>Add New Expense</button>);
  };

  // const [isEditing, setIsEditing] = useState(false)

  // const startEditingHandler = () => {
  //   setIsEditing(true)
  // }

  //  const stopEditingHandler = () =>{
  //   setIsEditing(false)
  //  }
  
  // Later point the functions. Start editing is set in this component.
  // stopEditingHandler point to the cancel button in the ExpenseForm.js and 
  // set it to the Submit button adding into the saveExpenseHandler in this component,
  //  or via props to ExpenseForm. Both works.

  return <div className="new-expense">{expenseButton}</div>;

  // // We can also use
  // <div className="new-expense"></div>
  // {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
  // {isEditing && (
  //     <ExpenseForm
  //       onSaveExpenseData={saveExpenseDataHandler}
  //       onCancel={stopEditingHandler}
  //     />
  //   );
  // }
  // </div>
};

export default NewExpense;
