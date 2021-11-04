import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class List extends Component {
  render() {
  const { items, deleteList } = this.props

    return (
      <div>
        <h1 className="mb-5">List</h1>
        <ul>
          {items.length === 0 && <p>No items</p>}
          {items.map((item, index) => (
            <li key={index}>
              <div className="row d-flex align-items-center">
                <div className="col-10">
                  <p><strong>Name:</strong> {item.name}</p>
                  <p><strong>Price:</strong> {item.price}</p>
                </div>
                <div className="col-2">
                  <button className="btn btn-danger" onClick={() => deleteList(index)}>Delete</button>
                </div>
              </div>
            </li> 
          ))}
        </ul>
      </div>
    );
  }
}

export default List;