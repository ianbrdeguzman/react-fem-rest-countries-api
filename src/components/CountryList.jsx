import React, { useContext } from 'react';
import { AppContext } from './context';
import styled from 'styled-components';
import Country from './Country';
import Loading from './Loading';

const ContryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const CountryList = () => {
    const { countries, isLoading } = useContext(AppContext);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <main>
            <ContryContainer>
                {countries.map((country) => {
                    return <Country {...country} key={country.name} />;
                })}
            </ContryContainer>
        </main>
    );
};

export default CountryList;
