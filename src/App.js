import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react' //This is a hook

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
      },
    ]
  )

  //Delete Task Function
  const deleteTask = (id) => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return ( //Example of inline styling
    <div className="container ">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('No Tasks Active')}
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