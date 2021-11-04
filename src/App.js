import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'

import Pay from './components/Pay'
import Add from './components/Add'
import List from './components/List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeTab: "add",
      items: []
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteList = this.deleteList.bind(this)
  }

  addItem(name, price) {
    let object = {
      name: name ,
      price : price
    }
    this.setState({items: [object,...this.state.items]})
    
  }

  handleButtonClick(element) {
    this.setState({ activeTab: element })
    console.log(element)
  }

  deleteList(index) {
    let stateItem = this.state.items
    this.setState({items : stateItem.splice(index,1)})
    console.log(index);
  }

  render() {
    console.log("State log - ", this.state)
    return (
      <>
      <h1>HAHAHAHAH</h1>
        <div className="d-flex direction-row">
          <Button isSelected={"add" === this.state.activeTab} text="add" handleClick={() => this.handleButtonClick("add")} />
          <Button isSelected={"list" === this.state.activeTab} text="list" handleClick={() => this.handleButtonClick("list")} />
          <Button isSelected={"pay" === this.state.activeTab} text="pay" handleClick={() => this.handleButtonClick("pay")} />
        </div>
        <div>
        {this.state.activeTab ===  "add" && <Add addItem={this.addItem} />}
        {this.state.activeTab === "list" && <List deleteList={this.deleteList} items={this.state.items} />}
        {this.state.activeTab === "pay" && <Pay />}
        </div>
      </>
    );
  }
}

export default App;
