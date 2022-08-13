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
// import TodoItem from "./components/TodoItem";
// import "./Style.css";

// function App() {
//   return (
//     <div className="todo-list">
//         <TodoItem/>
//         <TodoItem/>
//         <TodoItem/>
//         <TodoItem/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import ContactApp from "./ContactApp";
import Style from "./Style.css"

function App() {
  return (
    <div className="contacts">
      <ContactApp
      contact = {{name: "Mmm...", imgUrl: "https://imgflip.com/s/meme/Smiling-Cat.jpg",
        phone: "3287546475", email: "mmm@mlml.fur"}}
      />
      <ContactApp
        contact = {{name: "Mmm...", imgUrl: "https://imgflip.com/s/meme/Smiling-Cat.jpg",
        phone: "3287546475", email: "mmm@mlml.fur"}}
      />
      <ContactApp
        contact = {{name: "Mmm...", imgUrl: "https://imgflip.com/s/meme/Smiling-Cat.jpg",
        phone: "3287546475", email: "mmm@mlml.fur"}}
      />
      <ContactApp
        contact = {{name: "Mmm...", imgUrl: "https://imgflip.com/s/meme/Smiling-Cat.jpg",
        phone: "3287546475", email: "mmm@mlml.fur"}}
      />
    </div>
  );
}

export default App;
