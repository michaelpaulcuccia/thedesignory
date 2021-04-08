import styled from 'styled-components';

/* ------------------------- */
/* EquipmentFilter.js Header */
/* ------------------------- */

export const HeaderContainer = styled.div`
    width: 100%;
`;

export const InLineContainerLeft = styled.div`
    float: left;
    margin-left: 1.2%;
`;

export const InLineContainerRight = styled.div`
    float: right;
    margin-right: 1.2%;

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

/* --------------------------------- */
/* EquipmentFilter.js Grid and Tiles */
/* --------------------------------- */

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns:
    repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
    margin: 20px 20px 20px 20px;
`;

export const Tile = styled.div`
    padding: 2rem;
    background-color: #FCFDFC;
    height: minmax(fit-content, 10rem);
`;

export const ParaAndTag = styled.div`
    width: 100%;
    margin-top: 2%;
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

export const Exclamation = styled.div`
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

/* ----------------------------------------------------- */
/* EquipmentGet.js and EquipmentAdd.js Single Containers */
/* ----------------------------------------------------- */

export const SingleContainer = styled.div`
    margin: 0 auto;
    max-width: 50%;
`;

export const SingleTile = styled.div`
    background-color: #FCFDFC;
    width: minmax(60%, 80%);
    padding: 5px 5px 12px 5px;
`;

export const SingleParallelogram = styled.div`
    width: fit-content;
    height: fit-content;
    transform: skew(-20deg);
    background: #134074;
    float: left;
    margin-left: 4%;
`;