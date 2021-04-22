import React from 'react'

const toDoList =  (props) =>{
  
    return(
        <>
        <div>
       
    <li>{props.text}</li>
    <button onClick={ () =>{
        props.onSelect(props.id)
    }}  />
    </div>
    </>
    )
};

export default toDoList;