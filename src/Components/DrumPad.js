import React, { Component } from 'react';

const activeStyle = {
    backgroundColor: '#32a852',
    boxShado: '0 3px #334d3a',
    height: 77,
    marginTop: 13
};

const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    boxShado: '3px 3px 5px black'
};

class DrumPad extends Component {
    render() {
        return(
            <div className="drum-pad" id="drum-pad">
                <h2>Drum Pad</h2>
            </div>
        );
    }
};

export default DrumPad;
