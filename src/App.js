import React from 'react';
import { nanoid } from 'nanoid'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todos: [{id: 1, text: 'Walk fish'}, {id: 2, text: "Make balloon animals"}],
      text: ''
    }

    // this.handleClick = this.handleClick.bind(this);
  }

  // PRE ES6
 handleClick = () => {
  this.setState({
    isClicked: !this.state.isClicked
  })
 }
 
 handleSubmit = () => {
  this.setState({
    todos: [...this.state.todos, { id: nanoid(), text: this.state.text}],
    text: ""
  })
 }

 handleChange = (event) => {
  this.setState({
    text: event.target.value
  })
 }

 handleDelete = (id) => {
  // Find item by id to get its index
  const index = this.state.todos.findIndex(todo => todo.id === id);
  // Create copy of state so that we don't mutate directly
  const copy = [...this.state.todos];
  // Mutate the copy
  copy.splice(index, 1);
  // set state
  this.setState({
    todos: copy
  })
 }

  render() {

    return (
        <div className="App">
          {/* <h1>{this.state.isClicked ? "I have been clicked" : "I have not been clicked"}</h1>
          <button onClick={this.handleClick}>Click me!</button> */}
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <button onClick={this.handleSubmit}>Submit</button>
          <ul>
            {this.state.todos.map((todo) => {
              return <li className="list-item" key={todo.id}>
                <h4>{todo.text}</h4>
                <button onClick={() => this.handleDelete(todo.id)}>X</button>
              </li>
            })}
          </ul>
        </div>
      );
  }
}

// function App() {
//   return (
//     <div className="App">
//       Hello world
//     </div>
//   );
// }

export default App;
