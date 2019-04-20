import React from 'react';

const List = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
         todos.map(todo => {
             return(
               <div className = "collection-item" key = {todo.id}> 
                 <span onClick= {() => {deleteTodo(todo.id)}}>{todo.content}</span>
               </div>
             )
         })
    ) : (
        <p className = "center"> You have completed all the things for today </p>
    )
     return(
        <div className= "todo collection">
           {todoList}
        </div>  
     )    
}

export default List;