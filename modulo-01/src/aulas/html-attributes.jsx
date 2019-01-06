import React, { Component } from 'react';


class HtmlAttributes extends Component {

    constructor(props) {
        super(props)
        this.state = { value: "", placeholder: "Digite seu nome" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <article className="container">
                <label htmlFor="nome">Digite seu nome</label>
                <input type="text" id="nome" value={this.state.value} onChange={this.handleChange} placeholder={this.state.placeholder}/>
                <small>{this.state.value}</small>
            </article>
        )
    }
}

export default HtmlAttributes;