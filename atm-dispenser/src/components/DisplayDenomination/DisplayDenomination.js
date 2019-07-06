import React from 'react';
import './DisplayDenomination.css';

const displayDenomination = function (props) {
    let values = ''
    if (props.notesDenomination !== null) {
        values = Object.keys(props.notesDenomination)
            .map(function (item) {
                return <li className="liClass" key={item}>{props.notesDenomination[item]} note of Rs {item}</li>
            })
    }
    return (
        <div className="DisplayDenomination">
            <h3 className="borderClass">You will get following amount</h3>
            <ul className="ulClass">
                {values}
            </ul>
            <h3 className="borderClass"><strong>Total notes dispensed: {props.totalNotes}</strong></h3>
        </div>
    )
}

export default displayDenomination;