import React, { Component } from 'react';
import ButtonChildren from './buttonChildren';


class LikeButton extends Component {
    render() {
        return (
            <ButtonChildren handleClick={() => { console.log("clickou na props de handleClick de like-button") }}>Curtir</ButtonChildren>
        )
    }
}

export default LikeButton;