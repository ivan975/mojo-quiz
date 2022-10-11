import React from 'react';

const Question = ({ qs }) => {
    const { question, options } = qs;

    return (
        < div >
            <p>Q.{question}</p>
            <div className='bg-slate-300 rounded'>
                <input type="radio" name="" id="" />
                <span className='font-semibold pl-5 text-center'>{options[0]}</span>
                <input type="radio" name="" id="" />
                <span className='font-semibold pl-5 text-center'>{options[1]}</span>
                <input type="radio" name="" id="" />
                <span className='font-semibold pl-5 text-center'>{options[2]}</span>
                <input type="radio" name="" id="" />
                <span className='font-semibold pl-5 text-center'>{options[3]}</span>
            </div>
        </ div >
    );
};

export default Question;