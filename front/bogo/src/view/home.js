import React from 'react'
import {BogoCard} from "../components/BogoCard";

export const Home = () => (
    <div className={`home-view bg-gray-300 h-full overflow-hidden`}>
        <div className="cards-feed overflow-auto px-4 py-4 max-w-lg h-full container mx-auto">
            <BogoCard/>
            <BogoCard/>
            <BogoCard/>
            <BogoCard/>
            <BogoCard/>
            <BogoCard/>
            <BogoCard/>
            <BogoCard/>
        </div>
    </div>
)