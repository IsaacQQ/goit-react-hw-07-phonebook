import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import {
  InputForm,
  FormField,
  FormFieldInput,
  FieldName,
  ButtonAddContact,
} from './form.styled';
import { useState } from 'react';

export default function Form({ onSubmit }) {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const name = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = state;
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <FormField>
        <FieldName htmlFor="name">Name</FieldName>
        <FormFieldInput
          id={name}
          type="text"
          value={state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        ></FormFieldInput>
      </FormField>
      <FormField>
        <FieldName htmlFor="name">Number</FieldName>
        <FormFieldInput
          id={name}
          type="tel"
          value={state.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        ></FormFieldInput>
      </FormField>
      <ButtonAddContact type="submit" className="InputFieldButton">
        Add contact
      </ButtonAddContact>
    </InputForm>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};