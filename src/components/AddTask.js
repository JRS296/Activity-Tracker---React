import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    //We're giving each input its own state - A component level state, not an app level one
    //onChange={(e) => setText(e.target.value)} - Within curly braces is a function call, onChange - Detects when value of input element is changed
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text)
        {
            alert('Please Add a Task')
            return
        }

        onAdd({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='task' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='task' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} placeholder='Add Task' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>

        <input type='submit' value='Save Task' className='btn btn-block'></input>
    </form>
  )
}

export default AddTask