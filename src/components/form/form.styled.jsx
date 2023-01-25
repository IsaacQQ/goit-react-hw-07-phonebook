import styled from '@emotion/styled';

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding-bottom: 24px;
`;
export const InputForm = styled.form`
  padding: 10px;
  border: 1px solid black;
  width: 500px;
`;
export const FieldName = styled.label`
  display: flex;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const ButtonAddContact = styled.button`
  margin-left: 30px;
  display: flex;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
  background-color: lightgrey;
  :hover,
  focus {
    background-color: #6495ed;
    transform: scale(1.08);
  }
`;
export const FormFieldInput = styled.input`
  :focus {
    outline: none;
    border-radius: 3px;
    border: 4px solid #6495ed;
  }
`;