import { useState } from 'react';
import TodoItem from './TodoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function TodoList({ todos, toggleStatus, deleteTodo, editTodo }) {
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState('');

  const handleEditClick = (todo) => {
    setEditTodoId(todo.id);
    setEditTodoText(todo.text);
  };

  const handleCancelEdit = () => {
    setEditTodoId(null);
    setEditTodoText('');
  };

  const handleSaveEdit = (todoId) => {
    editTodo(todoId, editTodoText);
    setEditTodoId(null);
    setEditTodoText('');
  };

  return (
    <div className="h-72 overflow-y-auto border rounded-md">
      <table className="w-full">
        <thead>
          <tr>
            <th className="pr-4 py-2 text-slate-500">List</th>
            <th className="px-4 py-2 text-slate-500">Status</th>
            <th className="px-4 py-2 text-slate-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="border px-4 py-2">
                {editTodoId === todo.id ? (
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-full"
                    value={editTodoText}
                    onChange={(e) => setEditTodoText(e.target.value)}
                  />
                ) : (
                  <TodoItem todo={todo} toggleStatus={toggleStatus} />
                )}
              </td>
              <td className="border px-4 py-2 justify-center">
                {todo.status === 'complete' ? (
                  <span className="text-green-500 block mx-auto text-center">Completed</span>
                ) : (
                  <span className="text-red-500 block mx-auto text-center">Pending</span>
                )}
              </td>
              <td className="border px-4 py-2 flex justify-center items-center">
                {editTodoId === todo.id ? (
                  <>
                    <button
                      className="mx-1 px-2 py-1 bg-green-500 text-white rounded"
                      onClick={() => handleSaveEdit(todo.id)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button
                      className="mx-1 px-2 py-1 bg-red-500 text-white rounded"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="mx-1 px-2 py-1 bg-green-500 text-white rounded"
                      onClick={() => toggleStatus(todo.id)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button
                      className="mx-1 px-2 py-1 bg-blue-500 text-white rounded"
                      onClick={() => handleEditClick(todo)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="mx-1 px-2 py-1 bg-red-500 text-white rounded"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
