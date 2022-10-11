import React from 'react';

const Question = ({ qs }) => {
    const { question } = qs;
    return (
        <div>
            <p>{question}</p>
        </div>
    );
};

export default Question;