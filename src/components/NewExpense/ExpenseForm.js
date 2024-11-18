import { useState } from 'react'
import './ExpenseForm.css'
import expenseDate from '../Expenses/ExpenseDate';

const ExpenseForm = (props) => {
    const [userInput, setuserInput] = useState({
        enteredTitle: '',
        enteredPrice: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setuserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

    const priceChangeHandler = (event) => {
        setuserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }
    
    const dateChangeHandler = (event) => {
        setuserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

    const SubmitHandler =(event) => {
        event.preventDefault();
        const expenseDate = {
            title: enteredTitle,
            amount: enteredPrice,
            date: new Date(enteredDate)
        }
        props.onSaveexpenseDate(expenseDate);
        setEnteredTitle('')
        setEnteredPrice('')
        setEnteredDate('')
    }

    return(
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title </label>
                    <input 
                        type="text"
                        onChange={titleChangeHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label> Price </label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01"
                        onChange={priceChangeHandler}
                        value={enteredPrice}
                    />
                </div>
                <div className="new-expense__control">
                    <label> Date </label>
                    <input 
                        type="date" 
                        min="2024-11-12" 
                        step="2026-01-31"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;