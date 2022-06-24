import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => { //can also do ({title}) instead of (lala)
    /*const onClick = () => {
        console.log('Heya')
    }*/

  return (
    <header className='header'>
        <h1>{title}</h1> 
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  ) //can use just {title}, if method 2 is used instead of lala.title
}

//For setting default props: When a prop is not sent in
Header.defaultProps = {
    title: "Task Tracker",
}

//Code to demonstrate below snippet: <h1 style={headingStyle}>Task Tracker {lala.title}</h1> 
const headingStyle = { //Using vairable object to carry inline style attributes
    color:"red",
    backgroundColor:"black"
}

/*Header.PropTypes = {
    title: PropTypes.string, //Proptypes.string.isRequired - Can make it compulsory for prop to exist
} 
//To specify type
*/   

export default Header

//lala is a prop parameter