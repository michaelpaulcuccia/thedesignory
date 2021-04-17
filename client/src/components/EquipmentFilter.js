import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    Row,
    ColLeft,
    Title,
    ColRight,
    Select,
    GridContainer,
    Tile,
    Parallelogram,
    UnskewText,
    Exclamation,
    Model,
    Serial,
    AssociatedDevices,
    AddContainer,
    PlusSign,
    AddEquipText
}
    from '../styledcomponents/grid';


const EquipmentFilter = () => {

    const [data, setData] = useState([]);
    const [showAddEquipment, setShowAddEquipment] = useState(true)

    //gets data, coverts to JSON, runs capitilizing function, sets 'data' to state
    const getData = async () => {
        const res = await fetch('https://run.mocky.io/v3/294d7269-55c7-46f6-80c0-4a90560785e2');
        const resjson = await res.json();
        setTagToUpperCase(resjson)
        setData(resjson);
    }

    //capitalize 'tags'
    const setTagToUpperCase = (array) => {
        array.forEach(item => {
            let upper = item.tag.toUpperCase()
            item.tag = upper
        })
    }

    useEffect(() => {
        getData()
        //eslint-disable-next-line
    }, [])

    //redirect function
    const history = useHistory();

    //handles clicking of a tile
    const onClickHandler = (item) => {
        const id = item.target.id;

        console.log(id)

        if (id === 'addItem') {
            history.push("/equipment/add");
        } else {
            history.push(`/equipment/get/${id}`);
            setShowAddEquipment(false);
        }

        //clear item
        item = null
    }

    //handles selection of a tag in the dropdown 
    const handleChange = async (e) => {

        let tag = e.target.value;

        //fetch new data because if this function has run before the state has been changed and data array will be filtered! 
        const res = await fetch('https://run.mocky.io/v3/294d7269-55c7-46f6-80c0-4a90560785e2');
        const resjson = await res.json();

        //hide addEquipment
        setShowAddEquipment(false);

        //filter array by tag, and set to new state
        let newArray = resjson.filter(item => item.tag === tag);
        setData(newArray)

    }

    return (
        <Container>

            <Row>

                <ColLeft>
                    <Title>EQUIPMENT</Title>
                </ColLeft>

                <ColRight>
                    <Select
                        onChange={handleChange}
                    >
                        <option disable='true' value="filterbytag">FILTER BY TAG</option>
                        <option defaultValue="Eos">Eos</option>
                        <option defaultValue="Repellendus">Repellendus</option>
                        <option defaultValue="Maiores">Maiores</option>
                    </Select>
                </ColRight>

            </Row>

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

                {showAddEquipment &&
                    <Tile
                        id='addItem'
                        onClick={(item) => onClickHandler(item)}
                    >
                        <AddContainer>
                            <PlusSign>+</PlusSign>
                            <AddEquipText>Add Equipment</AddEquipText>
                        </AddContainer>
                    </Tile>
                }
            </GridContainer>

        </Container>
    )
}

export default EquipmentFilter
