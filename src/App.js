import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  return ( //Example of inline styling
    <div className="container ">
      <Header title="Task Tracker"/>
      <Tasks/>
    </div>
  );
}

export default App;


/*
//Example of using JS functionalities in React for dynamism

import React from "react";
import Header from "./components/Header";

function App() {
  const name = "Brad"
  const x = false

  return ( //Example of inline styling
    <div className="container ">
      <h1 style={{color:"red"}}>Hello </h1>
      <h1>Hello {name}</h1>
      <h1>Hello {x? "Yaa":"Naaa"}</h1>
      <Header title="Hekko"/>
    </div>
  );
}

export default App;*/

/*
Example of class type component
class App extends React.Component {
  render() {
    return
    <h1>Hello World</h1>
  }
}*/