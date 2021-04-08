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
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    // grid-template-rows:  repeat(2, 1fr);
    // grid-column-gap: 1%;
    // grid-row-gap: .5%; 
    // margin-left: 10vw;
    // margin-right: 10vw;
    // max-width: 1200px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
`;

export const Tile = styled.div`
    padding: 5px 10px 10px 10px;
    margin: 15px 5px 15px 5px;
    background-color: #FCFDFC;
    width: minmax(200px, 50vw);
    height: minmax(200px, 50vh);
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