import React from 'react';
import './Option.css';
import bikePic from '../../images/Frame.png';
import busPic from '../../images/Frame-1.png';
import trainPic from '../../images/Group.png';
import carPic from '../../images/Frame-2.png';
import peopleLogo from '../../images/peopleicon.png';

const Option = (props) => {
    const { passengers, budget } = props.result;
    const { vehicle, pickFrom, pickTo } = props.ridePlan;
     
    console.log(vehicle);

    let optionPic = '';
    if (vehicle === 'bike') {
        optionPic = bikePic;
    }
    if (vehicle === 'train') {
        optionPic = trainPic;
    }
    if (vehicle === 'car') {
        optionPic = carPic;
    }
    if (vehicle === 'bus') {
        optionPic = busPic;
    }

    const style = {
        marginTop:'20px',
        backgroundColor: 'orange', 
        color: 'white', 
        borderRadius: "5px"
        }

    return (
        <div>
            <div style={style}>
                <h3>{pickFrom} --> {pickTo} </h3>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <img src={optionPic} alt="" />
                    <p>{vehicle}</p>
                </div>
                <div className="col-md-4">
                    <img src={peopleLogo} alt="" />
                    <p>{passengers}</p>
                </div>
                <div className="col-md-4">
                <h3>{budget}$</h3>
                </div>
            </div>
        </div>
    );
};

export default Option; <h1>this is option</h1>