import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        //Membuat reducer
        //Menambahkan todos
        addTodos: (state, action) => {
            state.push(action.payload);
            return state;
        },
        //remove todos
        removeTodos: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        //update todos
        updateTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item,
                    };
                }
                return todos;
            });
        },
        //selesai
        completeTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todos;
            });
        },
    },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;