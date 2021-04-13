import React, { useReducer, useEffect, createContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

const defaultState = {
    countries: [],
    isLoading: true,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, countries: action.payload, isLoading: false };
        default:
            throw new Error('No action type found');
    }
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const url = `https://restcountries.eu/rest/v2/all`;

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            if (response.status >= 400) {
                throw new Error(response.statusText);
            } else {
                dispatch({ type: 'FETCH_DATA', payload: response.data });
            }
        } catch (error) {
            console.error(error);
            alert(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
