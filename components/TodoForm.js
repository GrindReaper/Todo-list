import { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What would you like to do?"
        className="p-2 rounded-t-md border-none bg-transparent mb-4 mt-2 w-56 max-w-md focus:outline-none"
        style={{ borderBottom: '1px solid #D1D5DB' }}
      />
      <button type="submit" className="p-2 bg-red-500 text-white rounded-md h-9 w-40 max-w-md">
        Add
      </button>
    </form>
  );
}
