import styled from '@emotion/styled';

export const ListElement = styled.li`
  margin: 10px;
`;

export const DeleteBtn = styled.button`
  margin-left: 20px;
  border: solid 1px grey;
  border-radius: 3px;
  background-color: lightgrey;
  padding: 5px 10px;
  cursor: pointer;
  :hover,
  focus {
    background-color: #6495ed;
    transform: scale(1.08);
  }
`;

export const Table = styled.table`
  width: 500px;
  margin-bottom: 20px;
  border: 15px solid #f2f8f8;
  border-top: 5px solid #f2f8f8;
  border-collapse: collapse;
`;

export const TableTh = styled.th`
  font-weight: bold;
  padding: 5px;
  background: #f2f8f8;
  border: none;
  border-bottom: 5px solid #f2f8f8;
  text-align: left;
  font-weight: normal;
`;
export const TableTd = styled.td`
  padding: 5px;
  border: none;
  border-bottom: 5px solid #f2f8f8;
`;