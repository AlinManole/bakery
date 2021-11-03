import React, { Component } from 'react';

class Button extends Component {
    render() {
        console.log("Props Log - " , this.props)
        return (
            <div>
                <button isSelected="" onClick={this.props.handleClick} className="btn m-2 btn-outline-primary">{this.props.text} {this.props.list} {this.props.pay} </button>
            </div>
        );
    }
}

export default Button;