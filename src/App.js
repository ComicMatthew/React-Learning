import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_DATA = [
  { id: 'e1', title: "Car insurance", amount: 294.67, date: new Date(2022, 7, 28) },
  { id: 'e2', title: "House", amount: 294644.67, date: new Date(2022, 5, 28) },
  { id: 'e3', title: "Mcdonald", amount: 24.67, date: new Date(2021, 2, 28) },
];

function App() {

  let [expenses, setExpenses] = useState(DUMMY_DATA)

  

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      console.log([expense, ...prevExpenses]);
      return [expense, ...prevExpenses]
      
    })
    
  }
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
