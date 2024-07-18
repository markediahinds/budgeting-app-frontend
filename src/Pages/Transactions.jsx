import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Transactions = () => {
    const API = import.meta.env.VITE_BASE_URL
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then(res => {
            setTransactions(res)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {transactions.map((transaction, i) => {
                return (
                    <main key={i}>
                        <Link to={`/transactions${i}`}>{transaction.product}</Link>
                    </main>
                )
            })}
        </div>
    );
};

export default Transactions;