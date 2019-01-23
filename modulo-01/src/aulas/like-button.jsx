import React, { Component } from 'react';
import ButtonChildren from './button-children';

class LikeButton extends Component {
    render() {
        return (
            <ButtonChildren handleClick={() => { console.log("clickou na props de handleClick de like-button") }}>Curtir</ButtonChildren>
        )
    }
}

export default LikeButton;