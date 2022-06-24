import Task from './Task'
import { useState } from 'react' //This is a hook
/*
//We want tasks to be part of state: Determines how object is rendered and behaves.
const tasks = [
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
]*/

const Tasks = ({ tasks, onDelete, onToggle }) => {
  
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
        //<h3 key={task.id}>{task.text}</h3>
        //<Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks 