import classNames from 'classnames';

export default function TodoItem({ todo, toggleStatus, deleteTodo }) {
  return (
    <div className={classNames('flex justify-between items-center p-2 border-b', { 'line-through text-gray-400': todo.status === 'complete' })}>
      <span className="flex-1 cursor-pointer">
        {todo.text}
      </span>
    </div>
  );
}
