import React from 'react'
import { Link } from 'react-router-dom';
function EmptyCard() {
    return (
        <div className="empty-card">
            <div className="ecard">
                <h1>No contacts found</h1>
                <Link to='/AddUser'>
                    <button>Add New Contact</button>
                </Link>
            </div>
        </div>

    )
}

export default EmptyCard
