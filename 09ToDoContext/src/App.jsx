import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import InputTodo from "./components/InputTodo";
import AddedTodo from "./components/AddedTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // if we don't do it this way then new todo is replce all the previous todo
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // we uses useEffect for local storage, first we call getItem(key) because we need to get all the todos that are add previouslies

  // Data stored in local storage always in string form So, before we get data we need to convert it into JSON()

  // getItem(key)

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, []);

  // how to store the data in local storage by using setItem(key, value)
  // we need to convert data into string to store into the local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div className="h-screen w-full bg-slate-600 flex flex-col justify-center items-center gap-3">
        <div className="text-white text-3xl">Todo List</div>
        <div className="w-2/3">
          <InputTodo />
        </div>
        <div className="flex flex-col gap-y-2 w-2/3">
          {todos.map((todo) => (
            <div className="w-full mt-2"
            key={todo.id}>
            <AddedTodo todo={todo}/>
          </div>
          ))}
        </div>
        
      </div>
    </TodoProvider>
  );
}

export default App;
