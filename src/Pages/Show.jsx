import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import '../Styles/show.css'

const Show = () => {
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()
    const { id } = useParams()
    const [transactionDetails, setTransactionDetails] = useState(null)

    const handleDelete = () => {
        fetch(`${API}/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                navigate('/transactions')
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetch(`${API}/${id}`)
            .then(res => res.json()) 
            .then(res => setTransactionDetails(res))
            .catch(err => console.error(err))
    }, [])

    
    if(!transactionDetails) return <div>Loading...</div>
    return (
        <div className='show-container'>
            { transactionDetails && 
                <div>
                    <h3>Product: {transactionDetails.product}!</h3>
                    <h5>Amount: {transactionDetails.amount}</h5>
                    <h5>Date:{transactionDetails.date}</h5>
                    <h5>Merchant:{transactionDetails.merchant}</h5>
                    <h5>Category:{transactionDetails.category}</h5>
                    <h5>Frequency:{transactionDetails.frequency}</h5>
                    <h5>Type:{transactionDetails.type}</h5>
                    <Link to={`/transactions/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                    <br/>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            }
        </div>
    );
};

export default Show;

// <a href={captainDetails.url} target='_blank'>