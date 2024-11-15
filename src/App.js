import './App.css';
import ExpenseItem  from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {  
      date: new Date(2024, 10, 12),
      title: 'werid aah book',
      price: 3000.99
    },
    {  
      date: new Date(2024, 10, 12),
      title: 'pre-shitted pants!',
      price: 3.99
    },
  ]

  return (
    <div className="App">
      <ExpenseItem data={expenses[0]}/>
      <ExpenseItem data={expenses[1]}/>
    </div>
  )
}

export default App;