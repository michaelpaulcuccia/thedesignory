import React from 'react';
import {
    SingleContainer,
    Tile,
    ParaAndTag,
    Parallelogram,
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
        <div>
            <br></br>
            <SingleContainer>
                <Tile>
                    <ParaAndTag>
                        <Parallelogram><span><Tag>ADD A TAG</Tag></span></Parallelogram>
                    </ParaAndTag>
                    <br></br>
                    <Model><strong>Model</strong></Model>
                    <Serial>Serial Number: <i>ABC001</i></Serial>
                    <AssociatedDevices>Associated Devices: <i>000</i></AssociatedDevices>
                </Tile>
            </SingleContainer>
            <button onClick={onClickHandler}>Go Back</button>
        </div>
    )
}

export default EquipmentAdd
