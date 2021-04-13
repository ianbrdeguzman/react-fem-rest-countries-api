import React, { useReducer, useEffect, createContext } from 'react';
import axios from 'axios';
import reducer from './reducer';

const AppContext = createContext();

const defaultState = {
    theme: 'dark',
    countries: [],
    countryDetails: {},
    newBorders: [],
    isLoading: true,
    input: '',
    noInput: false,
    url: 'https://restcountries.eu/rest/v2/all',
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleTheme = (theme) => {
        dispatch({ type: 'TOGGLE_THEME', payload: theme });
    };

    const handleInput = (input) => {
        dispatch({ type: 'CHANGE_INPUT', payload: input });
    };

    const startLoading = () => {
        dispatch({ type: 'START_LOADING' });
    };
    const stopLoading = () => {
        dispatch({ type: 'STOP_LOADING' });
    };

    const clearInput = () => {
        dispatch({ type: 'CLEAR_INPUT' });
    };

    const handleFilter = (region) => {
        if (region === 'All') {
            fetchCountries(state.url);
        } else {
            const regionURL = `https://restcountries.eu/rest/v2/region/${region}`;
            fetchCountries(regionURL);
        }
    };

    const searchCountry = (input) => {
        if (!state.input) {
            dispatch({ type: 'ERROR' });
            setTimeout(() => {
                dispatch({ type: 'REMOVE_ERROR' });
            }, 3000);
            return;
        }
        const searchURL = `https://restcountries.eu/rest/v2/name/${
            input || state.input
        }`;
        fetchCountries(searchURL);
    };

    const createBorders = (borders) => {
        // const bordersName = state.countries.filter(country=> {
        //     return borders.f
        // })

        state.countries.map((country) => {
            console.log(country.name);
            console.log(borders);
        });
        // [...state.countries].map((country) => {
        //     return [...state.countryDetails.borders].forEach((border) => {
        //         if (country.alpha3Code === border) {
        //             bordersName.push(country.name);
        //         }
        //     });
        // });
        // dispatch({ type: 'CREATE_BORDERS', payload: bordersName });
    };

    const fetchCountries = async (url) => {
        try {
            startLoading();
            const response = await axios.get(url);
            if (response.status >= 400) {
                throw new Error(response.status);
            }
            dispatch({ type: 'FETCH_DATA', payload: response.data });
        } catch (error) {
            console.error(error);
            alert('Invalid input');
            stopLoading();
            clearInput();
        }
    };

    const fetchDetails = async (url) => {
        try {
            startLoading();
            const response = await axios.get(url);
            if (response.status >= 400) {
                console.log('error');
                throw new Error(response.status);
            }
            dispatch({ type: 'FETCH_DETAILS', payload: response.data[0] });
        } catch (error) {
            console.log('error');
            console.error(error);
            stopLoading();
            clearInput();
        }
    };

    useEffect(() => {
        fetchCountries(state.url);
    }, [state.url]);

    return (
        <AppContext.Provider
            value={{
                ...state,
                handleTheme,
                handleInput,
                searchCountry,
                handleFilter,
                fetchDetails,
                createBorders,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
