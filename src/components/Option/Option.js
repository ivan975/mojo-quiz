import React from 'react';

const Option = ({ option, correctAnswer }) => {
    console.log(correctAnswer);
    return (
        <div>
            <h2>{option}</h2>
        </div>
    );
};

export default Option;