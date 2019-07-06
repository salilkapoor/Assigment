import React from 'react';
import './WithdrwalForm.css';
const withdrawalForm = function (props) {
    let errorMessage = '';
    if (!props.allowedAction) {
        errorMessage = <p className="errorCls" data-columns="2">{props.errorMessage}</p>
    }
    return (
        <div className="WithdrawalForm">
            <h3 className="marginClass">Welcome to ATM</h3>
            <label>Enter the amount</label>
            <input className="inputClass" type="number" value={props.moneyWithdraw} onChange={props.valueChanged}></input>
            {errorMessage}
            <button className="marginClass buttonClass" disabled={!props.allowedAction} onClick={props.clicked}>Get Money</button>
        </div>
    )
}

export default withdrawalForm;