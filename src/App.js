import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './components/context';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import Error from './components/Error';

function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };
    return (
        <Router>
            <AppProvider>
                <ThemeProvider
                    theme={theme === 'dark' ? darkTheme : lightTheme}
                >
                    <GlobalStyles />
                    <Navbar toggleTheme={toggleTheme} theme={theme} />
                    <Switch>
                        <Route exact path='/'>
                            <Form />
                            <CountryList />
                        </Route>
                        <Route exact path='/country/:id'>
                            <CountryDetails />
                        </Route>
                        <Route exact path='/*'>
                            <Error />
                        </Route>
                    </Switch>
                </ThemeProvider>
            </AppProvider>
        </Router>
    );
}

export default App;
