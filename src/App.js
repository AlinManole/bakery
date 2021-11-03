import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeTab: "add",
      items: []
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick(element) {
      this.setState({ activeTab: element})
      console.log(element)
  }

  render() {
    console.log("State log - ", this.state)
    return (
      <div>
        <h1 className="m-3">hello</h1>
        <div className="d-flex direction-row">
          <Button text="add" handleClick={() => this.handleButtonClick("add")} />
          <Button list="list" handleClick={() => this.handleButtonClick("list")} />
          <Button pay="pay" handleClick={() => this.handleButtonClick("pay")} />
        </div>
      </div>
    );
  }
}

export default App;
