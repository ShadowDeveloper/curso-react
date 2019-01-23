import React, { Component } from "react";
import ButtonChildren from "./button-children";
import PropKey from './prop-key';
import PropTypes from 'prop-types' ;


class Statefull extends Component {

    constructor() {
        super();
        this.state = {
            color: "green"
        }
    }

    render() {
        return (
            <div>
                <hr />
                <h2>Component Stateless</h2>
                <hr />
                <PropKey color={this.state.color} />

                {
                    ["red", "yellow", "blue"].map((color, i) => (
                        <ButtonChildren
                            key={i}
                            handleClick={() => this.setState({ color })}
                        >
                            {color}</ButtonChildren>
                    ))
                }
            </div>
        )
    }
}

class Stateless extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: this.props.color,
                width: '100px',
                height: '100px',
            }}>
            </div>
        )
    }
}

Stateless.defaultProps = {
    color: "violet"
}

Stateless.propTypes = {
    color: PropTypes.string
}


export { Statefull, Stateless }

