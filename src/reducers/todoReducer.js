import { produce } from 'immer';

const todoReducer = (todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [{ id: Date.now(), text: action.text, completed: false, editing: false }, ...todos];
    case 'DELETE_TODO':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return produce(todos, (draft) => {
        const todo = draft.find((t) => t.id === action.id);
        todo.completed = !todo.completed;
      });
    case 'EDIT_TODO':
      return produce(todos, (draft) => {
        const todo = draft.find((t) => t.id === action.id);
        todo.editing = !todo.editing;
      });
    case 'SAVE_TODO':
      return produce(todos, (draft) => {
        const todo = draft.find((t) => t.id === action.id);
        todo.text = action.newText;
        todo.editing = false;
      });
    default:
      return todos;
  }
};

export default todoReducer;