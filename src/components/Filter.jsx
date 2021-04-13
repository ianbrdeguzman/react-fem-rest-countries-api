import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.select`
    font-family: inherit;
    font-size: 12px;
    margin: 2.5rem 0 0 0;
    padding: 0.8rem 2rem 0.8rem 1rem;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

const Filter = () => {
    return (
        <SelectContainer
            name='region'
            id='region'
            aria-label='filter by region'
        >
            <option value='' hidden>
                Filter by Region
            </option>
            <option value='All'>All</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceana'>Oceana</option>
        </SelectContainer>
    );
};

export default Filter;
