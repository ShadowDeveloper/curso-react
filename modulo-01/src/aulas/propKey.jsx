import React, { Component } from 'react';


class PropKey extends Component {

    render() {
        return (
            <div style={{
                backgroundColor: this.props.color,
                width: '100px',
                height: '100px'
            }}>

            </div>
        )
    }
}

PropKey.defaultProps = {
    color: "tomato"
}

export default PropKey;