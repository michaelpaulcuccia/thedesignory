import React from 'react';
import {
    Container,
    Row,
    ColLeft,
    ColRight,
    GridContainer,
    Tile,
    Parallelogram,
    UnskewText,
    Model,
    Serial,
    AssociatedDevices
}
    from '../styledcomponents/grid';
import { useHistory } from 'react-router-dom';

const EquipmentAdd = () => {

    const history = useHistory();

    const onClickHandler = () => {
        history.push('/')
    }

    return (
        <Container>
            <GridContainer>
                <Tile
                    onClick={() => onClickHandler()}
                >
                    <Row>
                        <ColLeft>
                            <Parallelogram>
                                <UnskewText>
                                    Tag
                                    </UnskewText>
                            </Parallelogram>
                        </ColLeft>
                        <ColRight>
                        </ColRight>
                    </Row>

                    <Model><strong>Model</strong></Model>
                    <Serial>Serial Number: 000</Serial>
                    <AssociatedDevices>Associated Devices: 0</AssociatedDevices>
                </Tile>
            </GridContainer>

            <br></br>
            <p>Click Tile to Go Back</p>

        </Container>
    )
}

export default EquipmentAdd
