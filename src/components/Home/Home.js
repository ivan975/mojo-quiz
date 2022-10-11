import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const cards = useLoaderData().data;
    // console.log(cards);
    return (
        <div className='flex flex-col flex-wrap-reverse'>
            <div className="intro-part">
                <h1 className='text-4xl font-bold font-mono mt-4'>Mojo Quiz</h1>
                <p >This is a quiz platform where you can test your knowledge about the things you learnt</p>
            </div>
            <div className="quiz-part">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-12 mt-5 gap-3">
                    {
                        cards.map(card =>
                            <Quiz
                                key={card.id}
                                card={card}
                            />)
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;