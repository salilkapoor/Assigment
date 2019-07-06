import React, { Component } from 'react';
import WithdrawalForm from '../../components/WithdrawalForm/WithdrawalForm';
import DisplayDenomination from '../../components/DisplayDenomination/DisplayDenomination';
import Aux from '../../hoc/Auxillary/Auxillary';
import './Body.css';

class body extends Component {
    state = {
        moneyWithdrawal: 0,
        isAllowedValue: true,
        errorMessage: '',
        notesDenomination: null,
        totalNotesWithdrawn: 0
    }
    valueChangedHandler = (event) => {
        if (event.target.value >= 0 && event.target.value % 1 === 0) {
            this.setState({
                moneyWithdrawal: event.target.value,
                isAllowedValue: true,
                errorMessage: '',
            });
        } else {
            this.setState({
                moneyWithdrawal: event.target.value,
                isAllowedValue: false,
                errorMessage: 'Please enter the allowed values.',
            });
        }
    }
    clickedEventHandler = () => {
        let moneyWithdrawn = this.state.moneyWithdrawal,
            allowedDenominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1],
            noteCounter = {},
            totalNotes = 0;
        for (let i = 0; i < allowedDenominations.length; i++) {
            if (moneyWithdrawn >= allowedDenominations[i]) {
                debugger
                noteCounter[allowedDenominations[i]] = parseInt(moneyWithdrawn / allowedDenominations[i]);
                moneyWithdrawn = moneyWithdrawn - (noteCounter[allowedDenominations[i]] * allowedDenominations[i]);
                totalNotes += noteCounter[allowedDenominations[i]];
            }
        }
        this.setState({
            notesDenomination: noteCounter,
            totalNotesWithdrawn: totalNotes
        })
    }

    render() {
        return (
            <Aux>
                <div className="Body">
                    <WithdrawalForm
                        moneyWithdraw={this.state.moneyWithdrawal}
                        valueChanged={this.valueChangedHandler}
                        allowedAction={this.state.isAllowedValue}
                        errorMessage={this.state.errorMessage}
                        clicked={this.clickedEventHandler}
                    />
                    <DisplayDenomination
                        notesDenomination={this.state.notesDenomination}
                        totalNotes={this.state.totalNotesWithdrawn}
                    />
                </div>

            </Aux>
        )
    }

}

export default body;