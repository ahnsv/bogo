import React from 'react';

export const BogoButton = ({text, style, clickAction}) => {
    const handleClick = (e) => {
        e.preventDefault();
        const target = e.target;
        target.classList.add("clicked");
        setTimeout(() => {
            target.classList.remove("clicked");
        }, 200);
        clickAction();
    }
    return (
        <button
            className={`bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full min-w-full focus:outline-none focus:shadow-outline shadow`}
            style={style}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}