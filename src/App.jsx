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

import React from "react";
import TodoItem from "./components/TodoItem";
import "./Style.css";

function App() {
  return (
    <div className="todo-list">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </div>
  );
}

export default App;
