import React from 'react';
import DownArrow from '../assets/icons/down-arrow.svg';

export const BogoCard = ({name, tag, bogoja, content}) => {
    return (
        <div className={`bogo-card bg-white h-32 mb-4 max-w-lg shadow-md rounded-lg`}>
            <div className="bogo-card--bogoja py-2 px-2 flex flex-row flex-no-wrap max-w-full">
                <div className="bogoja--profile w-12 h-12 rounded-full bg-gray-300 shadow"/>
                <div className="bogoja--info flex flex-col flex-auto px-2">
                    <div className="bogoja--name max-w-xs">name</div>
                    <div className="bogoja--tag">tag</div>
                </div>
                <div className="bogo-card--tools mb-5 px-2 hover:bg-gray-300 rounded flex content-center">
                    <DownArrow className={`w-3 fill-current`} style={{fill: '#9c9c9c'}}/>
                </div>
            </div>
            <div className="bogo-card--content px-2">
                Bogo Content
            </div>
        </div>
    )
}