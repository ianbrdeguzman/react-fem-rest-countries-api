import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import Filter from './Filter';

const FormSection = styled.section`
    padding: 1.5rem 0;
    & div {
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
    }
`;

const Form = () => {
    return (
        <FormSection>
            <div>
                <form>
                    <button type='submit'>
                        <FaSearch />
                    </button>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        aria-label='search'
                        placeholder='Search for a country...'
                    />
                </form>
                <Filter />
            </div>
        </FormSection>
    );
};

export default Form;
