import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import components from ".";
import store from "../store";

const Contianer = styled.div`
    width: 90%;
    height: 90%;
`;

const Todolist = observer(() => {
    const { Todo } = components;
    const { todoStore } = store;

    const onToggle = (id) => {
        todoStore.toggleTodo(id);
    };
    const onDelete = (id) => {
        todoStore.deleteTodo(id);
    };
    return (
        <Contianer>
            {todoStore.todoList?.map((todo) => (
                <Todo key={todo.id} {...todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </Contianer>
    );
});

export default Todolist;
