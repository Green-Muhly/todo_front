import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";
import components from "../components";
import store from "../store";

const Container = styled.div`
    width: 90%;
    height: 80%;
    background-color: white;
    border-radius: 3%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: 0.1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
`;
const Top = styled.div`
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1.5px solid rgba(125, 140, 255, 0.25);
`;
const Mid = styled.div`
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Bot = styled.div`
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1.5px solid rgba(125, 140, 255, 0.25);
`;

const BotText = styled.span`
    color: rgb(125, 140, 255);
    font-size: 1rem;
    font-weight: 600;
`;

const MainContainer = observer(() => {
    const { Today, Todolist, AddModal } = components;
    const { todoStore } = store;

    const [modalOpen, setModalOpen] = useState(false);
    const onModalClose = () => {
        console.log(modalOpen);
        setModalOpen(false);
    };
    const onModalOpen = () => {
        console.log(modalOpen);
        setModalOpen(true);
    };

    return (
        <Container>
            <Top>
                <Today />
            </Top>
            <Mid>
                <Todolist />
            </Mid>
            <Bot>
                <BotText>📃 Task : {todoStore.todoList.length ? todoStore.todoList.length : 0}</BotText>
                <BotText onClick={onModalOpen}>Add Task 📝</BotText>
                <AddModal onRequestClose={onModalClose} isOpen={modalOpen} createTodo={todoStore.createTodo} addTodo={todoStore.addTodo} />
            </Bot>
        </Container>
    );
});

export default MainContainer;
