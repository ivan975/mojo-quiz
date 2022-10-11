import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ card }) => {
    return (
        <div>
            <div className="card w-64 bg-base-100 shadow-xl">
                <figure><img src={card.logo} alt="Shoes" /></figure>
                <div className="card-body bg-base-200">
                    <h2 className="card-title">{card.name}</h2>
                    <div className="card-actions justify-end mt-2">
                        <Link to={`../questions/${card.id}`} className="btn btn-primary justify-start">Get Started</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

/*
 Quiz -> Home(p)
 Home -> 
*/

export default Quiz;