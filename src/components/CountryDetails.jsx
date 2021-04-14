import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { device } from '../styles/device';
import { useParams } from 'react-router';
import { AppContext } from './context';
import Loading from './Loading';

const Container = styled.section`
    width: 100vw;
    article {
        width: 90%;
        margin: 0 auto;
        background-color: transparent;
    }
    a {
        display: inline-block;
        font-family: inherit;
        padding: 0.5rem 1.5rem;
        margin: 3rem 0;
        border-radius: 3px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        span {
            margin-left: 0.5rem;
        }
    }
    @media ${device.tablet} {
        width: 83%;
        margin: 0 auto;
    }
    @media ${device.laptop} {
        width: 95%;
        margin: 0 auto;
    }
    @media ${device.desktop} {
        width: 90%;
        margin: 0 auto;
    }
`;

const CountryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const ImageWrapper = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media ${device.laptop} {
        width: 55%;
        height: 400px;
    }
    @media ${device.laptopL} {
        width: 50%;
    }
    @media ${device.desktop} {
        max-width: 700px;
    }
    @media ${device.desktopL} {
        max-width: 900px;
    }
`;

const InfoWrapper = styled.div`
    padding: 2rem 0;
    div p {
        margin: 1rem 0;
        span {
            display: inline-block;
            padding: 0.5rem;
            margin: 0.5rem 1rem 0.5rem 0;
            border-radius: 3px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        }
    }
    div::nth-child(1) {
        grid-area: one;
    }
    div:nth-child(2) {
        margin: 2rem 0;
        grid-area: two;
    }
    div:nth-child(3) {
        grid-area: three;
    }
    @media ${device.laptop} {
        width: 40%;
        display: grid;
        grid-template-areas:
            'one two'
            'three three';
        div:nth-child(3) {
            margin-top: 1rem;
        }
    }
    @media ${device.laptopL} {
        width: 45%;
    }
    @media ${device.desktop} {
        max-width: 700px;
    }
    @media ${device.desktopL} {
        max-width: 900px;
    }
`;

const CountryDetails = () => {
    const { country } = useParams();
    const searchURL = `https://restcountries.eu/rest/v2/name/${country}`;
    const {
        fetchDetails,
        countryDetails,
        isLoading,
        newBorders,
        borders,
        createBorders,
    } = useContext(AppContext);

    const {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
    } = countryDetails;

    useEffect(() => {
        fetchDetails(searchURL);
    }, []);

    useEffect(() => {
        createBorders();
    }, [borders]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Container>
            <article>
                <Link to='/react-fem-rest-countries-api/'>
                    <FaLongArrowAltLeft />
                    <span>Back</span>
                </Link>
                <CountryWrapper>
                    <ImageWrapper>
                        <img src={flag} alt={name} />
                    </ImageWrapper>
                    <InfoWrapper>
                        <div>
                            <h2>{name}</h2>
                            <p>Native name: {nativeName}</p>
                            <p>
                                {population &&
                                    `Population: ${population.toLocaleString()}`}
                            </p>
                            <p>Region: {region}</p>
                            <p>Sub Region: {subregion}</p>
                            <p>Capital: {capital}</p>
                        </div>
                        <div>
                            <p>Top Level Domain: {topLevelDomain}</p>
                            <p>
                                {currencies &&
                                    `Currencies: ${currencies[0].name}`}
                            </p>
                            <p>
                                {languages &&
                                    `Languages: ${languages
                                        .map((language) => {
                                            return language.name;
                                        })
                                        .join(' ')
                                        .replace(/\s/g, ', ')}`}
                            </p>
                        </div>
                        <div>
                            <h3>Border Countries:</h3>
                            <p>
                                {newBorders.length !== 0 ? (
                                    newBorders.map((border, index) => {
                                        return (
                                            <span key={index}>{border}</span>
                                        );
                                    })
                                ) : (
                                    <span>N/A</span>
                                )}
                            </p>
                        </div>
                    </InfoWrapper>
                </CountryWrapper>
            </article>
        </Container>
    );
};

export default CountryDetails;
