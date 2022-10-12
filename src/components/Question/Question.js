import React from 'react';
import Swal from 'sweetalert2';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Question = ({ qs }) => {
    const { question, options, correctAnswer } = qs;
    const handleQuizAnswer = options => {
        if (options === correctAnswer) {
            Swal.fire(
                'Yayyyy',
                'Correct Answer',
                'success'
            )
        }
        else {
            Swal.fire(
                'Sorrry',
                'Wrong Answer',
                'error'
            );
        }
    }

    return (
        < div >
            <p>Q.{question}</p>
            {
                options.map(option =>
                    <div className=''>
                        <button onClick={() => handleQuizAnswer(option)} className='pl-5 flex items-center'>
                            <CheckCircleIcon className='h-4 w-4'></CheckCircleIcon>{option}
                        </button>
                    </div>
                )
            }
        </ div >
    );
};

export default Question;