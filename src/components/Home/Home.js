import React from 'react';
import './Home.css'
import bikeImg from '../../images/Frame.png';
import carImg from '../../images/Frame-2.png';
import busImg from '../../images/Frame-1.png';
import trainImg from '../../images/Group.png';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory()
    const handleRideInfo = (vehicle) => {
        history.push(`/destination/${vehicle}`)
    }
    
    return (
        <div className="home">
            <div className="row ride-category-row">
                <div className="col-md-3">
                    <div onClick={() => handleRideInfo('bike')} className="ride-category-card">
                        <img src={bikeImg} alt="" />
                        <h4>BIKE</h4>
                    </div>
                </div>
                <div className="col-md-3">
                    <div onClick={() => handleRideInfo('car')} className="ride-category-card">
                        <img src={carImg} alt="" />
                        <h4>CAR</h4>
                    </div>
                </div>
                <div className="col-md-3">
                    <div onClick={() => handleRideInfo('bus')} className="ride-category-card">
                        <img src={busImg} alt="" />
                        <h4>BUS</h4>
                    </div>
                </div>
                <div className="col-md-3">
                    <div onClick={() => handleRideInfo('train')} className="ride-category-card">
                        <img src={trainImg} alt="" />
                        <h4>TRAIN</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;