import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [], 
      isUpdate: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e, itemId) {
    e.preventDefault();
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }    

    if (!itemId) {
      const itemsRef = firebase.database().ref('items');
      itemsRef.push(item);
      console.log('add');
      
    }

    else {
      const itemRef = firebase.database().ref(`/items/${itemId}`);
      itemRef.update(item)
      console.log('update');
      
    }
    
    this.setState({
      username: '',
      currentItem: '',
      isUpdate: false,
      id: ''
    })
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];

      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
        });
      }

      this.setState({
        items: newState
      })
    })
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  updateItem(itemId) {
    const itemFound = this.state.items.find(item => item.id === itemId);
    
    this.setState({
      isUpdate: true,
      id: itemFound.id,
      username: itemFound.user,
      currentItem: itemFound.title,
    })

  }

  render() {
    return (
      <div className="App">
        <header>
          <div className='wrapper'>
            <h1>Fun Food Friends</h1>
          </div>
        </header>
        <div className='container'>
          <section className='add-item'>
            <form onSubmit={(e) => this.handleSubmit(e, this.state.id)}>
              <input type="text" ref="username" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
              <input type="text" ref="currentItem" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
              <button>
              {this.state.isUpdate  ? "Update Item" : "Add Item"}
              </button>
            </form>

          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
                {this.state.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <h3>{item.title}</h3>
                      <p>brought by: {item.user}</p>
                      <button onClick={() => this.removeItem(item.id)}>Remove item</button>
                      <button className="update" onClick={() => this.updateItem(item.id)}>Update item</button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }

}

export default App;
