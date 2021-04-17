/* Upper Section */

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

export const Title = styled.span`
    font-size: 13px;
    font-weight: 700;
`;


export const ColRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0;
`;

export const Select = styled.select`
    font-size: 16px;
    font-weight: 700;
    padding: 5px 12px;
    background-color: #EEF4ED;
`;

/* Grid and Tiles */

export const GridContainer = styled.div` 
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
    /*Set a Defined Height of Container And Assign Children (Tiles) a Percentage*/
    height: 30vh;
`;

export const Tile = styled.div`
    background: #fff;
    padding: 7px 15px;
    height: 100%;
    width: 100%;
`;

/* Tag, Parallelogram, Exclamation */

export const Parallelogram = styled.div`
    width: fit-content;
    height: fit-content;
    transform: skew(-20deg);
    background: #134074;
    color: #fff;
    margin-left: .3rem;
`;

export const UnskewText = styled.p`
    transform: skew(+20deg); 
    padding: 3px 6px;
    font-size: 12px;
    font-weight: 600;
    color: #FCFDFC;
`;

