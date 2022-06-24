import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from 'react' //These are a hook

//Tutorial Used: https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=0s

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      
    ]
  )

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    //console.log(data)
    return data
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    //console.log(data)
    return data
  }
  
  //Add Task Function
  const addTask = async (task) => {
    //console.log(task)
    /*const id = Math.floor(Math.random() * 100) + 1
    const newTask = {id, ...task} //...task, gets all the attributes from parent function's parameter
    setTasks([...tasks, newTask])*/

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  }

  //Delete Task Function
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    } )
    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const ToggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })
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