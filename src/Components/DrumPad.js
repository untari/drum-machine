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
    componentDidMount(){
        document.addEventLIstener('keydown', this.handleKeyPress);
    }
    componentWillUnmount(){
        document.removeEventLIstener('keydown', this.handleKeyPress);
    }
    
    handleKeyPress(e){
        if (e.keyCode === this.props.keyCode){
            this.playSound();
        }
    }
    
    activatePad() {
        if (this.props.power) {
        if (this.state.padStyle.backgroundColor === 'orange') {
            this.setState({
            padStyle: inactiveStyle
            });
        } else {
            this.setState({
            padStyle: activeStyle
            });
        }
        } else if (this.state.padStyle.marginTop === 13) {
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
    }
    
    playSound(){
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.activetePad();
        setTimeout(() => this.activetePad(), 100);
        this.props.updateDisplay(this.props.clipId(/-/g, ' '));
    }
    render() {
        return(
            <div className="drum-pad" 
                id={this.props.clipId}
                onClick={this.playSound}
                style={this.state.padStyle}>
                
                <audio 
                    className='clip'
                    id={this.props.keyTrigger}
                    src={this.props.clip}
                />
                {this.props.keyTrigger}
            </div>
        );
    }
};

export default DrumPad;
