import React, { Component } from 'react';


class HtmlAttributes extends Component {
    render() {
        return (
            <article className="container">
                <label htmlFor="nome">Digite seu nome</label>
                <input type="text" id="nome" />
            </article>
        )
    }
}

export default HtmlAttributes;