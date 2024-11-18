import './ExpenseItem.css'
import Card from '../UI/card'
import ExpenseDate from './ExpenseDate'
import { useState } from 'react'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseDate.title)

    const clickHandler = () => {
        console.log('Ouch!');
        setTitle(`Updated by click ${title}`)
        console.log(title)
        }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expenseDate.date}/>
            <div className='expense-item__description'>
                <h2>{props.expenseDate.title}</h2>
                <div className='expense-item__price'>{props.expenseDate.price}</div>
            </div>
            <button onClick={clickHandler}>Dont Click Me</button>
        </Card>
    )
}

export default ExpenseItem