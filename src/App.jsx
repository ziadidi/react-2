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
import "./Style.css"

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <div className="todoList">
        <div className="items">
          <input id="item1" type="checkbox" checked />
          <label for="item1">Create a to-do list</label>

          <input id="item2" type="checkbox" />
          <label for="item2">Take down Christmas tree</label>

          <input id="item3" type="checkbox" />
          <label for="item3">Learn Ember.js</label>

          <input id="item4" type="checkbox" />
          <label for="item4">Binge watch every episode of MacGyver</label>

          <input id="item5" type="checkbox" />
          <label for="item5">Alphabetize everything in the fridge</label>
        </div>
      </div>
    </div>
  );
}

export default App;
