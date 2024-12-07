import React, { createContext, useState } from 'react';

export const OysterContext = createContext();

export const OysterProvider = ({ children }) => {
    const [balance, setBalance] = useState(30); // Initial balance
    const [journeyHistory, setJourneyHistory] = useState([]);
    const [currentJourney, setCurrentJourney] = useState(null);

    const addBalance = (amount) => {
        setBalance((prevBalance) => prevBalance + amount);
    };

    const startJourney = (start) => {
        setCurrentJourney({ start, maxFare: 3.2 });
        setBalance((prevBalance) => prevBalance - 3.2);
    };

    const endJourney = (end, fare) => {
        if (currentJourney) {
            setJourneyHistory((prevHistory) => [
                ...prevHistory,
                { ...currentJourney, end, fare },
            ]);
            setBalance((prevBalance) => prevBalance + (3.2 - fare));
            setCurrentJourney(null);
        }
    };

    return (
        <OysterContext.Provider
            value={{
                balance,
                journeyHistory,
                currentJourney,
                addBalance,
                startJourney,
                endJourney,
            }}
        >
            {children}
        </OysterContext.Provider>
    );
};
