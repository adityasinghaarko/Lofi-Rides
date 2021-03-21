import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import data from '../../data/data.json';
import Option from '../Option/Option';
import "./Destination.css";
import mapPic from '../../images/Map.png';

const Destination = () => {
    const { vehicle } = useParams();
    const vehicleFromParam = vehicle;
    const [vehicleFromInput, setVehicleFromInput] = useState('')
    const [ridePlan, setRidePlan] = useState({
        vehicle: '',
        pickFrom: '',
        pickTo: ''
    })

    const [result, setResult] = useState({})

    const onBlurHandler = (event) => {
        if (event.target.name === 'pickFrom') {
            const newRidePlan = { ...ridePlan };
            newRidePlan[event.target.name] = event.target.value;
            setRidePlan(newRidePlan);
        }

        if (event.target.name === 'pickTo') {
            const newRidePlan = { ...ridePlan };
            newRidePlan[event.target.name] = event.target.value;
            setRidePlan(newRidePlan);
        }
        if (event.target.name === 'vehicle') {
            const newRidePlan = { ...ridePlan };
            newRidePlan[event.target.name] = event.target.value;
            setRidePlan(newRidePlan);
            console.log(ridePlan.vehicle);
        }
    }

    const searchButtonHandler = (event) => {
        const newRidePlan = { ...ridePlan };
        newRidePlan.vehicle = vehicleFromInput;
        setRidePlan(newRidePlan);
        const vehicleInfo = data.find(category => category.vehicle === `${ridePlan.vehicle}`)
        setResult(vehicleInfo.info);

        event.preventDefault();
    }
    return (
        <div className="row">
            <div className="col-md-5">
                <Container>
                    <form>
                        <h4>Pick from</h4>
                        <input name="pickFrom" required onBlur={onBlurHandler} type="text" />
                        <br />
                        <h4>Pick to</h4>
                        <input name="pickTo" required onBlur={onBlurHandler} type="text" />
                        <br />
                        <h5>Choose your ride mean(Click Once)</h5>
                        {
                            vehicleFromParam === 'all' ? <input onBlur={event => setVehicleFromInput(event.target.value)} required id="vehicleInput" type="text" placeholder="bus/car/bike/train" />
                                :
                                <input onBlur={event => setVehicleFromInput(event.target.value)} required className="vehicleInput" type="text" defaultValue={vehicleFromParam} />
                        }
                        <br />
                        <input style={{ marginTop: '10px' }} onClick={searchButtonHandler} type="submit" value="Search" />
                    </form>
                    <Option result={result} ridePlan={ridePlan}></Option>
                </Container>
            </div>
            <div className="col-md-7">
                <img style={{width: '500px', height:"500px"}} src={mapPic} alt=""/>
            </div>
        </div>
    );
};

export default Destination;