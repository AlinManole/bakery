import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Button extends Component {
    render() {
        console.log("Props Log - " , this.props)
        return (
            <div>
                <button onClick={this.props.handleClick} className={`btn btn-outline-primary m-2 ${this.props.isSelected && 'btn-primary text-white'}`}>{this.props.text}</button>
            </div>
        )
    }

}
export default Button;



