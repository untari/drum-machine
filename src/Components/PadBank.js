import React, { Component } from 'react';
import DrumPad from './DrumPad';



class PadBank extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let padBank;
        if (this.props.power){
            padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
                return(
                    <DrumPad
                        clip={padBankArr[i].url}
                        keyCode={padBankArr[i].keyCode}
                        keyTrigger={padBankArr[i].keyTrigger}
                        power={this.props.power}
                        updateDisplay={this.props.updateDisplay}
                    />
                );
            });
        }
        return(
            <div className="pad-bank">
                {padBank}
            </div>
        );
    }
};

export default PadBank;
