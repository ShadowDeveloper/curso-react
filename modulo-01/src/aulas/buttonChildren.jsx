import React, { Component } from 'react';

class ButtonChildren extends Component {
    render(){
        return(
           <button onClick={this.props.handleClick}>{this.props.children}</button> 
        )
    }
}

export default ButtonChildren;