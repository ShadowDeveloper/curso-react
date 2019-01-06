import React, { Component } from 'react';

class GetDefaultProps extends Component {

    // constructor(props){
    //     super(props)
    //     this.name = "Rodrigo nome deafult do constructor"
    // }

    render() {
        return (
            <h4>{this.props.name + ' ' + this.props.lastName}</h4>
        )
    }
}

GetDefaultProps.defaultProps = {
    name: "Rodrigo - Nome Default",
    lastName: "Souza"
}

export default GetDefaultProps;