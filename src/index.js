import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";


ReactDOM.render(<App/>, document.getElementById("root"))

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App/>, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";

// function App() {
//     const firstName ="Diane"
//     const lastName = "Pucci" 

//     return (
//         <h1>Hello {`${firstName} ${lastName}`}!</h1>
//     )
// }

// ReactDOM.render(<App/>, document.getElementById("root"))



//  import React from "react";
//  import ReactDOM from "react-dom";

//  function App() {
//      const date = new Date()
//      const hours = date.getHours()
//      let timeofDay
//      const styles = {
//         fontSize: 30
        
//      }

//      if (hours < 12) {
//          timeofDay = "morning"
//          styles.color = "#FFF933"
//          styles.backgroundColor = "#2A8A22"
//      } else if (hours >= 12 && hours < 17) {
//          timeofDay = "afternoon"
//          styles.color = "#FF33A7"
//          styles.backgroundColor = "#0F2C7C"
//      } else {
//          timeofDay = "night"
//          styles.color = "#3371FF"
//          styles.backgroundColor = "#4C4E52"
//      }


//      return (
//          <h1 style = {styles}> Good {timeofDay}!</h1>
//      )
//  }

//  ReactDOM.render(<App/>, document.getElementById("root"))



// import React from "react";
// import ReactDOM from "react-dom";

// function App() {
//     const date = new Date()

//     return (
//         <h1>It is currently about {date.getHours() % 12} o'clock!</h1>
//     )
// }

// ReactDOM.render(<App/>, document.getElementById("root"))