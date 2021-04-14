const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, countries: action.payload, isLoading: false };
        case 'FETCH_DETAILS':
            return {
                ...state,
                countryDetails: action.payload,
                isLoading: false,
            };
        case 'FETCH_BORDERS':
            return { ...state, borders: action.payload };
        case 'CREATE_BORDERS':
            return { ...state, newBorders: action.payload };
        case 'TOGGLE_THEME':
            if (action.payload === 'dark') {
                return { ...state, theme: 'light' };
            } else {
                return { ...state, theme: 'dark' };
            }
        case 'CHANGE_INPUT':
            return { ...state, input: action.payload };
        case 'CLEAR_INPUT':
            return { ...state, input: '' };
        case 'SEARCH_COUNTRY':
            return { ...state, countries: action.payload };
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'STOP_LOADING':
            return { ...state, isLoading: false };
        case 'ERROR':
            return { ...state, noInput: true };
        case 'REMOVE_ERROR':
            return { ...state, noInput: false };
        default:
            throw new Error('No action type found');
    }
};

export default reducer;
