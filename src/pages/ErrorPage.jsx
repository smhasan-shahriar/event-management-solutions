import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-[80vh] flex flex-col justify-center items-center gap-10'>
            <h1 className='text-8xl font-black text-red-500'>Oops!</h1>
            <h2 className='text-3xl text-red-400 font-bold'>404 Not Found</h2>
            <Link to="/"><button className='btn bg-blue-400 text-white text-2xl capitalize rounded-full'>Go to Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;