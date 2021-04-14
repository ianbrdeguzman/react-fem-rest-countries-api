import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContext } from './components/context';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import Error from './components/Error';

function App() {
    const { theme } = useContext(AppContext);

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/react-fem-rest-countries-api/'>
                        <Form />
                        <CountryList />
                    </Route>
                    <Route
                        exact
                        path='/react-fem-rest-countries-api/country/:country'
                    >
                        <CountryDetails />
                    </Route>
                    <Route exact path='/react-fem-rest-countries-api/*'>
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
