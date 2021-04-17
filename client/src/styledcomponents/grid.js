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

/* *************************************** */

export const Tile = styled.div`
    background: #fff;
    height: 100%;
    padding: 1.5em 2em;
    width: 100%;
`;

/* EquipmentGet and Single Tiles */
export const SingleTile = styled.div`
    //margin: 0 auto;
    max-width: 350px;
    background: #fff;
    padding: 1.5em 2em;
`;

/* *************************************** */

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

export const Exclamation = styled.span`
    width: 20px;
    height: 20px;
    line-height: 16px;
    border-radius: 50%;
    font-size: 16px;
    font-weight: 700;
    color: #030912;
    text-align: center;
    background-color: #EEF4ED;
    margin-right: 2em
`;

export const Model = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-top: .5rem;
`;

export const Serial = styled.div`
    font-size: 16px;
    font-weight: 400;
`;

export const AssociatedDevices = styled.div`
    font-size: 16px;
    font-weight: 400;
`;

/* Add Tile */

export const AddContainer = styled.div`
    margin-top: 2rem;
`;

export const PlusSign = styled.p`
    color: #134074; 
    text-align: center;
    font-size: 22px;
    font-weight: 700;
`;

export const AddEquipText = styled.p`
    color: #134074; 
    text-align: center;
    font-size: 22px;
    font-weight: 400; 
`;

