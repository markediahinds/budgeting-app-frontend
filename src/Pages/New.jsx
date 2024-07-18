import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import '../Styles/new.css'

const New = () => {
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()
    const [newTransaction, setNewTransaction] = useState({
        id: uuidv4(),
        product: '',
        amount: '',
        date: '',
        merchant: '',
        category: '',
        frequency: ''
    })

    const handleChange = (e) => {
        setNewTransaction((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(API, {
            method: 'POST',
            body: JSON.stringify(newLog),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            navigate('/transactions')
        })
        .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>New Transaction</legend>
                <input 
                    type="text"
                    placeholder="Product"
                    name="product"
                    value={newTransaction.product}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder="Amount"
                    name="amount"
                    value={newTransaction.amount}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder="Date"
                    name="date"
                    value={newTransaction.date}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder="Merchant"
                    name="merchant"
                    value={newTransaction.merchant}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder="Category"
                    name="category"
                    value={newTransaction.category}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder="Frequency"
                    name="frequency"
                    value={newTransaction.frequency}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder="Type"
                    name="type"
                    value={newTransaction.type}
                    onChange={handleChange}
                />
                <br/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    );
};

export default New;