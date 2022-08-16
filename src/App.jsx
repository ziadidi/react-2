// import React from "react";
// import Navbar  from "./components/Navbar";
// import MainContent  from "./components/MainContent";
// import Footer  from "./components/Footer";

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <MainContent/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import ContactApp from "./ContactApp";
// import Style from "./Style.css"

// function App() {
//   return (
//     <div className="contacts">
//       <ContactApp
//       contact = {{name: "Mmm...", imgUrl: "https://imgflip.com/s/meme/Smiling-Cat.jpg",
//         phone: "3287546475", email: "mmm@mlml.fur"}}
//       />
//       <ContactApp
//         contact = {{name: "Mmm...", imgUrl: "https://imgflip.com/s/meme/Smiling-Cat.jpg",
//         phone: "3287546475", email: "mmm@mlml.fur"}}
//       />
//       <ContactApp
//         contact = {{name: "Mmm...", imgUrl: "https://imgflip.com/s/meme/Smiling-Cat.jpg",
//         phone: "3287546475", email: "mmm@mlml.fur"}}
//       />
//       <ContactApp
//         contact = {{name: "Mmm...", imgUrl: "https://imgflip.com/s/meme/Smiling-Cat.jpg",
//         phone: "3287546475", email: "mmm@mlml.fur"}}
//       />
//     </div>
//   );
// }

// export default App;

import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} 
      handleChange = {this.handleChange}/>
    ));
    return (
    <div 
    className="todo-list">{todoItems}
    </div>
    )
 }
}

export default App;
