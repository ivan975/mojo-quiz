import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions = useLoaderData();
    const title = useLoaderData().data;
    return (
        <div>
            <h1 className='text-4xl text-center'>Quiz of <span className='font-bold'>{title.name}</span></h1>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-12 mt-5 gap-3'>
                {
                    questions.data.questions.map(qs =>
                        <Question
                            key={qs.id}
                            qs={qs}
                        />
                    )
                }
                {/* {
                    questions.options.map(option =>
                        <Question
                            key={option.id}
                            option={option}
                        />
                    )
                } */}
            </div>
        </div>
    );
};

export default Questions;