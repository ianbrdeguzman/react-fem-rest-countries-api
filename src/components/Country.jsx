import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CountryArticle = styled(Link)`
    width: 260px;
    height: 330px;
    border-radius: 5px;
    margin: 2rem;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    div {
        width: 100%;
        height: 160px;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    div:last-child {
        padding: 1rem;
        h2 {
            font-size: 1.1rem;
            margin: 0.5rem 0.5rem 1rem 0.5rem;
        }
        p {
            margin: 0.5rem;
        }
    }
`;

const Country = ({ flag, name, population, region, capital }) => {
    return (
        <CountryArticle to={`/react-fem-rest-countries-api/country/${name}`}>
            <div>
                <img src={flag} alt={name} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>Population: {population.toLocaleString()}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </CountryArticle>
    );
};

export default Country;
