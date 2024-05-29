import { useState, useEffect } from "react";
import "./App.css";
import { getTodos } from "./services/todosService";
import { getUsers } from "./services/usersService";

function App() {
  const [todos, setTodos] = useState([]);
  const [test, setTest] = useState("");
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getTodosData = async () => {
      const result = await getTodos()
      setTodos(result)
    }

    getTodosData()

     const getUsersData = async () => {
      const result = await getUsers()
      setUsers(result)
    }

    getUsersData()
    
  }, []);

console.log(users)

  return (
    <div>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
}

export default App;
