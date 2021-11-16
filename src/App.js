// import logo from './logo.svg';
//import './App.css';
import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { SearchTodo } from './components/SearchTodo'
import './assets/css/myStyle.css'

const todos = [
  {
    text: "cortar cebolla", completed: false
  },
  {
    text: "cortar zanahoria", completed: false
  },
  {
    text: "cortar lechuga", completed: true
  }
  ,
  {
    text: "cortar lechuga", completed: true
  },
  {
    text: "cortar lechuga", completed: false
  },
  {
    text: "cortar lechuga", completed: false
  }
]

function App() {
  //HOKS param
  const [searchValue, setSearchValue] = React.useState('test')

  return (
    <React.Fragment>

      <TodoCounter />

      <SearchTodo
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {
          todos.map(
            todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
            )
          )
        }

      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App
