import React, { Component } from 'react';

const activeStyle = {
    backgroundColor: 'orange',
    boxShado: '0 3px orange',
    height: 77,
    marginTop: 13
};

const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    boxShado: '3px 3px 5px black'
};

class DrumPad extends Component {
    constructor(props){
        super(props);
            this.state = {
                padStyle: inactiveStyle
            };
            this.handleKeyPress = this.handleKeyPress.bind(this);
            this.activePad = this.activePad.bind(this);
    }
    
    handleKeyPress(e){
        if (e.keyCode === this.props.keyCode){
            this.playSound();
        }
    }
    
    activePad() {
        if (this.props.power){
            if(this.state.padStyle.backgroundColor === 'orange')
                this.seState({
                    padStyle: inactiveStyle
                });
        } else {
            this.setState({
                padStyle: activeStyle
            });
        }
    } else if (this.state.padStyle.marginTop === 13){
        this.setState({
            padStyle: inactiveStyle
        });
    } else {
        this.setState({
            padStyle: {
                height: 77,
                marginTop: 13,
                backgroundColor: 'grey',
                boxShadow: '0 3px grey'
            }
        });
    }

    render() {
        return(
            <div className="drum-pad" 
                id="drum-pad"
                style={this.state.padStyle}>
                
            </div>
        );
    }
};

export default DrumPad;
