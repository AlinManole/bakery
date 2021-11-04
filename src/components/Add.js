import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class Add extends React.Component{
    constructor() {
        super()
        this.state = {
            name: "",
            price: 0
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
    }

    handleNameChange(e) {
        this.setState({name : e.target.value})
    }

    handlePriceChange(e) {
        this.setState({price: e.target.value})
    }

  render() {
      console.log(this.state.name);
      const { name, price} = this.state
    return(
        <>
            <h1>Add</h1>
            <input className="w-25" onChange={this.handleNameChange} type="text" className="form-control" placeholder="rentre du text " />
            <input className="w-25" onChange={this.handlePriceChange} type="range" className="form-range"  min="1" max="10"></input>
            <span>{price} </span>
            <button onClick={() => this.props.addItem(name,price)} type="button" className="btn btn-primary">ok</button>
        </>
                    
    )
  }
}

export default Add;
