import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <div className='flex flex-col min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl'>Error</h1>
                <br />
                {error && (
                    <div>
                        <p className='text-red-800'>{error.statusText || error.message}</p>
                        <p>{error.status}</p>
                    </div>
                )}
            </div>
        </div>
    )
};

export default ErrorPage;