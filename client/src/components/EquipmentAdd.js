import React from 'react';
import {
    MainContainer,
    Tile,
    ParaAndTagParent,
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
            <MainContainer>

                <Tile>
                    <ParaAndTagParent>
                        <Parallelogram><span><Tag>ADD A TAG</Tag></span></Parallelogram>
                    </ParaAndTagParent>
                    <br></br>
                    <Model><strong>Model</strong></Model>
                    <Serial>Serial Number: <i>ABC001</i></Serial>
                    <AssociatedDevices>Associated Devices: <i>000</i></AssociatedDevices>
                </Tile>

            </MainContainer>
            <button onClick={onClickHandler}>Go Back</button>
        </div>
    )
}

export default EquipmentAdd