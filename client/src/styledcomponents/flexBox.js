import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px 25px 30px 25px;
    padding: 15px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ColLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ColRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0;
`;

/* Data */

export const DataRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const Tile = styled.div`
  border: 1px solid #333;
  padding: 20px;
  flex: 25%;
  max-width: 25%;
`;