import React, { useState, useReducer } from 'react';
import {
    todoReducer,
    todoRead,
    todoInsert,
    todoUpdate,
    todoDelete,
    todoRemove
} from '../services/reduxTodo';

const TodoRedux = () => {
    const [state, dispatch] = useReducer(todoReducer, { data: [] });
    const [newTodo, setNewTodo] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            dispatch(todoInsert({ id: Date.now(), text: newTodo, completed: false }));
            setNewTodo('');
        }
    };

    const handleToggle = (id) => {
        const todo = state.data.find(item => item.id === id);
        dispatch(todoUpdate(id, { completed: !todo.completed }));
    };

    const handleDelete = (id) => {
        dispatch(todoDelete(id));
    };

    const handleRemoveCompleted = () => {
        dispatch(todoRemove());
    };

    const handleEdit = (id) => {
        setEditingId(id);
        setEditText(state.data.find(item => item.id === id).text);
    };

    const handleSaveEdit = (id) => {
        if (editText.trim()) {
            dispatch(todoUpdate(id, { text: editText }));
            setEditingId(null);
        }
    };

    return (
        <div>
            <h1>Todo List</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new todo"
                />
                <button type="submit">Add Todo</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.data.map(todo => (
                        <tr key={todo.id}>
                            <td>
                                {editingId === todo.id ? (
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                    />
                                ) : (
                                    todo.text
                                )}
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggle(todo.id)}
                                />
                            </td>
                            <td>
                                {editingId === todo.id ? (
                                    <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
                                ) : (
                                    <button onClick={() => handleEdit(todo.id)}>Edit</button>
                                )}
                                <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={handleRemoveCompleted}>Remove Completed</button>
        </div>
    );
};

export default TodoRedux;