import styled from 'styled-components';

/* Header Area */

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Title = styled.p`
    font-size: 13px;
    font-weight: 700;
    margin-left: 6% 
`;

export const SelectContainer = styled.span`
    margin-top: .7%;
    position: absolute;
    right: 6.5%;  
`;

export const Select = styled.select`
    font-size: 16px;
    font-weight: 700;
    padding: 5px 10px 5px 10px;
    background-color: #EEF4ED;
`;

/* EquipmentFilter Area */

export const MainContainer = styled.div`
    display: grid;
    /*OK - columns */
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-template-rows:  repeat(2, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin-left: 6%;
    margin-right: 2%;
`;

export const Tile = styled.div` 
    width: 80%; 
    box-sizing: border-box;
    padding: 5px 10px 10px 10px;
    margin: 15px 3px 15px 3px;
    background-color: #FCFDFC;
`;

export const ParaAndTagParent = styled.div`
    width: 100%
`;

export const Parallelogram = styled.div`
    width: fit-content;
    height: fit-content;
    transform: skew(-20deg);
    background: #134074;
    float: left;
    margin-left: 5%;
`;

export const Tag = styled.div`
    transform: skew(+20deg);    
    font-size: 12px;
    font-weight: 600;
    color: #FCFDFC;
    padding: 5px 10px 5px 10px;
`;

export const Exclamation = styled.p`
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    font-size: 16px;
    font-weight: 700;
    color: #030912;
    text-align: center;
    background-color: #EEF4ED;
    float: right;
`;

export const Model = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 8px;
    margin-left: 3%;
`;

export const Serial = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-left: 3%;
`;

export const AssociatedDevices = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-left: 3%;
`;

export const PlusSign = styled.p`
    color: #134074; 
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    line-height: 40%;
`;

export const AddEquipText = styled.p`
    color: #134074; 
    text-align: center;
    font-size: 22px;
    font-weight: 400; 
    line-height: 40%;
`;

/* EquipmentGet.js and EquipmentAdd.js Single Container */

export const SingleContainer = styled.div`
margin: 0 auto;
max-width: 50%;
`;