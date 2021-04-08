import React from 'react';
import {
    SingleContainer,
    SingleTile,
    ParaAndTag,
    SingleParallelogram,
    Tag,
    Model,
    Serial,
    AssociatedDevices
} from '../styledcomponents/Styles';
import { useHistory } from 'react-router-dom';

const EquipmentAdd = () => {

    const history = useHistory();

    const onClickHandler = () => {
        history.push('/')
    }

    return (
        <>
            <SingleContainer>
                <SingleTile>
                    <ParaAndTag>
                        <SingleParallelogram><span><Tag>ADD A TAG</Tag></span></SingleParallelogram>
                    </ParaAndTag>
                    <br></br>
                    <Model><strong>Model</strong></Model>
                    <Serial>Serial Number: <i>ABC001</i></Serial>
                    <AssociatedDevices>Associated Devices: <i>000</i></AssociatedDevices>
                </SingleTile>
            </SingleContainer>
            <button onClick={onClickHandler}>Go Back</button>
        </>
    )
}

export default EquipmentAdd
