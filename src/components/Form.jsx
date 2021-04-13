import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import Filter from './Filter';
import { device } from '../styles/device';
import { AppContext } from './context';

const FormSection = styled.section`
    padding: 3rem 0 0 0;
    div {
        width: 90%;
        margin: 0 auto;
    }
    form {
        width: 100%;
        max-width: 480px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        position: relative;
    }
    button {
        font-size: 1rem;
        position: absolute;
        top: 50%;
        left: 2rem;
        transform: translateY(-50%);
    }
    input {
        width: 100%;
        font-size: 14px;
        padding: 0.8rem 4rem;
        border: none;
        outline: none;
    }
    @media ${device.tablet} {
        div {
            width: 75%;
            margin: 0 auto;
        }
    }
    @media ${device.laptop} {
        div {
            width: 88%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    @media ${device.laptopL} {
        div {
            width: 85%;
        }
    }
    @media ${device.desktop} {
        div {
            width: 82%;
        }
    }
    @media ${device.desktopL} {
        div {
            width: 86%;
        }
    }
`;

const Form = () => {
    const { handleInput, searchCountry, noInput } = useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchCountry();
        e.target.reset();
    };

    return (
        <FormSection>
            <div>
                <form onSubmit={handleSubmit}>
                    <button type='submit'>
                        <FaSearch />
                    </button>
                    <input
                        style={
                            noInput
                                ? { border: '2px solid red' }
                                : { border: 'none' }
                        }
                        type='text'
                        name='search'
                        id='search'
                        aria-label='search'
                        placeholder='Search for a country...'
                        onChange={(e) => handleInput(e.target.value)}
                    />
                </form>
                <Filter />
            </div>
        </FormSection>
    );
};

export default Form;
