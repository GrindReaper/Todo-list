import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoSearch from '../components/TodoSearch';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addTodo = (text) => {
    setTodos([...todos, { id: uuidv4(), text, status: 'pending' }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: todo.status === 'pending' ? 'complete' : 'pending' } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="bg-slate-300 h-screen overflow-hidden px-60 pt-20 mx-auto">
        <div className="bg-slate-300 min-h-screen  flex flex-col relative rounded-t-3xl ">
          <div className="bg-white w-[70%] left-32 ml-5 mt-6 h-32 absolute top-[50px] justify-center shadow-md rounded-lg p-4 ">
            <div className=" flex flex-col gap-2 items-center  ">
              <TodoForm addTodo={addTodo} />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-auto h-40 rounded-t-3xl">
            <h1 className="text-center text-3xl font-light text-white px mt-2">
              Todo List
            </h1>
          </div>
          <div className="bg-slate-100 w-auto h-185px flex py-16 ">
            <div className="bg-white mx-auto w-[70%] mt-6 rounded-lg h-84 flex flex-col gap-2 shadow-md ">
              <h1 className="pl-4 pt-4 pb-2">Todo List</h1>
              <TodoSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <TodoList todos={filteredTodos} toggleStatus={toggleStatus} deleteTodo={deleteTodo} editTodo={editTodo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
