import React from 'react';

export const Loading = () => {
    return (
        <div className={`loading h-48 w-48 py-4 bg-white rounded-lg flex flex-col items-center justify-between`}>
            <div className="loading-animation h-24 w-24 m-4 bg-gray-300"
                 style={{animation: 'loading 6000ms ease-in-out infinite'}}/>
            <div className="loading-text text-lg font-bold">로딩중입니다</div>
        </div>
    )
};