import React, { Component } from 'react';

class ButtonChildren extends Component {
    render(){
        return(
           <button>{this.props.children}</button> 
        )
    }
}

export default ButtonChildren;