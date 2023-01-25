import React from 'react';
import { setFilter } from 'redux/filter/filter-slice';
import { useDispatch } from 'react-redux';
import { FilterContainer, FilterName, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch()
    const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };
  return (
    <FilterContainer>
      <FilterName>Find contacts by name</FilterName>
      <FilterInput type="text" name='filter' onChange={handleChange} />
    </FilterContainer>
  );
};

