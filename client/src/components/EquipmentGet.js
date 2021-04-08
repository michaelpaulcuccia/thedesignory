import React, { useState, useEffect } from 'react';
import {
    SingleContainer,
    SingleTile,
    ParaAndTag,
    SingleParallelogram,
    Tag,
    Exclamation,
    Model,
    Serial,
    AssociatedDevices
} from '../styledcomponents/Styles';
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
        <>
            <br></br>
            <SingleContainer>
                {data.map((item) => (
                    <SingleTile key={item.id}>
                        <ParaAndTag>
                            <SingleParallelogram><Tag>{item.tag}</Tag></SingleParallelogram>
                            <div>{item.hasError && item.hasError === true ? <Exclamation>!</Exclamation> : ""}</div>
                        </ParaAndTag>
                        <br></br>
                        <Model><strong>{item.model}</strong></Model>
                        <Serial>Serial Number: {item.serialNumber}</Serial>
                        <AssociatedDevices>Associated Devices: {item.associatedDevices && item.associatedDevices.length !== null ? item.associatedDevices.length : '0'}</AssociatedDevices>
                    </SingleTile>
                ))}
            </SingleContainer>
            <button onClick={onClickHandler}>Go Back</button>
        </>
    )
}

export default EquipmentGet
