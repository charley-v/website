import React from 'react';
import './CSS/Transactions.css';

const Transactions = () => {
    const transactions = [
        {
            id: 1,
            item: 'M9 Bayonet | Lore',
            type: 'Sold',
            date: '2024-07-29',
            price: '$330.00',
            buyer: 'User'
        },
        {
            id: 2,
            item: 'Butterfly Knife | Fade',
            type: 'Bought',
            date: '2024-07-18',
            price: '$200.00',
            seller: 'Jane Smith'
        },
        {
            id: 3,
            item: 'M9 Bayonet | Marble Fade',
            type: 'Sold',
            date: '2024-07-15',
            price: '$250.00',
            buyer: 'Alice Johnson'
        },
        {
            id: 4,
            item: 'Shadow Daggers | Slaughter',
            type: 'Bought',
            date: '2024-07-10',
            price: '$100.00',
            seller: 'Bob Brown'
        }
    ];

    return (
        <div className='transactions-container'>
            <h1>Transaction History</h1>
            <div className='transactions-table'>
                <div className='table-header'>
                    <div className='header-item'>Date</div>
                    <div className='header-item'>Item</div>
                    <div className='header-item'>Type</div>
                    <div className='header-item'>Price</div>
                    <div className='header-item'>Buyer/Seller</div>
                </div>
                {transactions.map(transaction => (
                    <div key={transaction.id} className='table-row'>
                        <div className='row-item'>{transaction.date}</div>
                        <div className='row-item'>{transaction.item}</div>
                        <div className='row-item'>{transaction.type}</div>
                        <div className='row-item'>{transaction.price}</div>
                        <div className='row-item'>{transaction.buyer || transaction.seller}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transactions;
