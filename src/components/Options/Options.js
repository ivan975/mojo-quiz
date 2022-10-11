import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Option from '../Option/Option';

const Options = ({ qs }) => {
    // const options = useLoaderData();
    const { options } = qs;
    return (
        <div>
            <h2>Options</h2>
            {
                options.map(option => <Option
                    key={option.id}
                    option={option}
                />)
            }
        </div>
    );
};

export default Options;