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
          <Button isSelected={("add"=== this.state.activeTab)} text="add" handleClick={() => this.handleButtonClick("add")} />
          <Button isSelected={("list"=== this.state.activeTab)} text="list" handleClick={() => this.handleButtonClick("list")} />
          <Button isSelected={("pay"=== this.state.activeTab)} text="pay" handleClick={() => this.handleButtonClick("pay")} />
        </div>
      </div>
    );
  }
}

export default App;
