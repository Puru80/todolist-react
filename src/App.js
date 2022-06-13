import './App.css';
import Header from './MyComponents/Header';
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import React, { useState } from "react";

function App() {

  const onDelete = (todo) =>{
    console.log("I am onDelete of todo", todo.sno);

    /*
      This way of deleting will not work in react
      let index = todos.indexOf(todo);
      todos.splice(index, 1); 
    */

    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "Get job1 done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "Get job2 done"
    },
    {
      sno: 3,
      title: "Go to the office",
      desc: "Get job3 done"
    }
  ]);
  
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
