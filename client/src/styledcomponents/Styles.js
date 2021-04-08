import styled from 'styled-components';

/* Header */

export const HeaderContainer = styled.div`
    max-width: 1200px;
    margin-top: .5%;
    margin-left: 10vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:  1fr;
`;

export const InLineContainerLeft = styled.div`
    display: inline-block;
`;

export const InLineContainerRight = styled.div`
    display: inline-block;
    margin-left: 72%;
`;

export const Title = styled.span`
    font-size: 13px;
    font-weight: 700;
`;

export const Select = styled.select`
    font-size: 16px;
    font-weight: 700;
    padding: 5px 10px 5px 10px;
    background-color: #EEF4ED;
`;

/* Grid and Tiles */

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:  repeat(2, 1fr);
    grid-column-gap: 1%;
    grid-row-gap: .5%; 
    margin-left: 10vw;
    margin-right: 10vw;
    max-width: 1200px;
`;

export const Tile = styled.div`
padding: 5px 10px 10px 10px;
margin: 15px 3px 15px 3px;
background-color: #FCFDFC;
`;

