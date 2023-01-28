import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car insurance", amount: 294.67, date: new Date(2022, 7, 28) },
    { title: "House", amount: 294644.67, date: new Date(2022, 5, 28) },
    { title: "Mcdonald", amount: 24.67, date: new Date(2021, 2, 28) },
    { title: "Car", amount: 9774.67, date: new Date(2019, 11, 28) },
  ];

  const addExpenseHandler = expense => {
    console.log('in app.js');
    console.log(expense);
  }
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
