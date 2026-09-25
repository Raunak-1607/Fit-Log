import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-[700] text-[#ccff00]'>
            <span className='flex gap-3'>
            Loading...
            <span className="loading loading-spinner loading-xl"></span>
            </span>
        </div>
    );
};

export default loading;