import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    let pStyle={
            color:"#998877"
    }
    return (

        
        <>
        <div>
            <h4>{todo.title}</h4>
            <p style = {pStyle} >{todo.desc}</p>
            <button className=" btn btn-sm btn-danger" onClick={()=> {onDelete(todo)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
