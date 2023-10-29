import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../redux/reducer';
import { GoPlus } from 'react-icons/go';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  //console.log("props from store", props);
  return (
    <div className="addTodos">
      <input type="text" onChange={(e) => handleChange(e)} className="todo-input" value={todo} />

      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        <GoPlus />
      </button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispathToProps)(Todos);
