import React, { Component } from 'react';
import DrumPad from './Components/DrumPad';
import PadBank from './Components/PadBank';
import './App.css';

class App extends Component {
    render(){
          return (
            <div className="inner-container" id="drum-machine">
                    <DrumPad />
                    <PadBank />
            </div>
        );
    }
};

export default App;
