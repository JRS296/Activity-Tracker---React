import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react' //This is a hook

//Tutorial Used: https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=0s

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
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
  
  //Add Task Function
  const addTask = (task) => {
    //console.log(task)
    const id = Math.floor(Math.random() * 100) + 1
    const newTask = {id, ...task} //...task, gets all the attributes from parent function's parameter
    setTasks([...tasks, newTask])
  }

  //Delete Task Function
  const deleteTask = (id) => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const ToggleReminder = (id) => {
    //console.log(id)
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
    //Here tasks is our state, wwe map through all the tasks, with each one called 'task' 
  }

  return ( //Example of inline styling
    <div className="container ">
      <Header onAdd={() => setShowAddTask(!showAddTask)} title="Task Tracker" showAdd={showAddTask}/>
      {showAddTask ? (<AddTask onAdd={addTask}/>) : (<></>)}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleReminder}/>) : ('No Tasks Active')}
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