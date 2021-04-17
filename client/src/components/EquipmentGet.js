import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    ColLeft,
    ColRight,
    GridContainer,
    Tile,
    Parallelogram,
    UnskewText,
    Exclamation,
    Model,
    Serial,
    AssociatedDevices
}
    from '../styledcomponents/grid';
import { useHistory } from 'react-router-dom';

const EquipmentGet = ({ match }) => {

    const id = match.params.id;

    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch('https://run.mocky.io/v3/294d7269-55c7-46f6-80c0-4a90560785e2');
        const resjon = await res.json();
        setTagToUpperCase(resjon)
        filterById(resjon)
    }

    //capitalize 'tags'
    const setTagToUpperCase = (array) => {
        array.forEach(item => {
            let upper = item.tag.toUpperCase()
            item.tag = upper
        })
    }

    //filter by id, set Array for dynamic output
    const filterById = (array) => {
        const newArray = array.filter(item => item.id === id);
        setData(newArray)
    }

    useEffect(() => {
        getData()
        //eslint-disable-next-line
    }, [])

    const history = useHistory();

    const onClickHandler = () => {
        history.push('/')
    }

    return (
        <Container>
            <GridContainer>
                {data.map((item) => (
                    <Tile key={item.id}
                        id={item.id}
                        onClick={(item) => onClickHandler(item)}
                    >
                        <Row>
                            <ColLeft>
                                <Parallelogram>
                                    <UnskewText>
                                        {item.tag}
                                    </UnskewText>
                                </Parallelogram>
                            </ColLeft>
                            <ColRight>{item.hasError && item.hasError === true ? <Exclamation>!</Exclamation> : ""}</ColRight>
                        </Row>

                        <Model><strong>{item.model}</strong></Model>
                        <Serial>Serial Number: {item.serialNumber}</Serial>
                        <AssociatedDevices>Associated Devices: {item.associatedDevices && item.associatedDevices.length !== null ? item.associatedDevices.length : '0'}</AssociatedDevices>
                    </Tile>
                ))}
            </GridContainer>

            <br></br>
            <p>Click Tile to Go Back</p>

        </Container>

    )
}

export default EquipmentGet
