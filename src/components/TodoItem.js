import React from 'react';

const TodoItem = ({ todo, dispatch }) => {
  const handleEditChange = (e) => {
    dispatch({ type: 'SAVE_TODO', id: todo.id, newText: e.target.value });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
      />

      {todo.editing ? (
        <input
          type="text"
          value={todo.text}
          onChange={handleEditChange}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}

      {!todo.editing && (
        <button onClick={() => dispatch({ type: 'EDIT_TODO', id: todo.id })}>
          Edit
        </button>
      )}

      {todo.editing && (
        <button onClick={() => dispatch({ type: 'SAVE_TODO', id: todo.id })}>
          Save
        </button>
      )}

      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
        disabled={!todo.completed}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;