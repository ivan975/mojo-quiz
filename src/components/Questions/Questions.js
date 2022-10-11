import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const questions = useLoaderData().data.questions;
    console.log(questions);
    return (
        <div>

        </div>
    );
};

export default Questions;