// import logo from './logo.svg';
//import './App.css';
import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { SearchTodo } from './components/SearchTodo'
import './assets/css/myStyle.css'

const todosDafault = [
  {
    text: "cortar cebolla 1", completed: false
  },
  {
    text: "cortar zanahoria 2", completed: false
  },
  {
    text: "cortar lechuga 3", completed: true
  }
  ,
  {
    text: "cortar lechuga 4", completed: true
  },
  {
    text: "cortar lechuga 5", completed: false
  },
  {
    text: "cortar lechuga 6", completed: false
  }
]

function App() {
  //HOKS
  const [todos, setTodos] = React.useState(todosDafault)
  const [searchValue, setSearchValue] = React.useState('')
  //COUNT COMPLETED 
  const completedTodos = todos.filter(todo => !!todo.completed).length
  console.log(`completedTodos ${completedTodos}`)
  //COUNT ALL
  const totalTodos = todos.length
  console.log(`totalTodos ${totalTodos}`)

  //FILTER FOR SEARCHED
  let searchedTodos = []
  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  //COMPLETAR TODO
  const completeTodo = (text) => {
    //HALLAR LA POSICION DEL ARRAY
    const todoindex = todos.findIndex(todo => todo.text === text)
    console.log("todoindex ", todoindex)
    // todos[todoindex]={
    //   text : todos[todoindex].text,
    //   completed:true
    // }
    const newTodos = [...todos] //CREAR CLON
    newTodos[todoindex].completed = true
    //MANDAR A RENDERIZAR EL ESTADO
    setTodos(newTodos)
  }

  //DELETE TODO
  const deleteTodo = (text) => {
    //HALLAR LA POSICION DEL ARRAY
    const todoindex = todos.findIndex(todo => todo.text === text)
    console.log("todoindex ", todoindex)
    const newTodos = [...todos] //CREAR CLON
    newTodos.splice(todoindex, 1)//CORTAR DESDE , HASTA
    //MANDAR A RENDERIZAR EL ESTADO
    setTodos(newTodos)
  }


  return (
    <React.Fragment>

      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <SearchTodo
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {
          searchedTodos.map(
            todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )
          )
        }

      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App
