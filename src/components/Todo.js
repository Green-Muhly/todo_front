import React, { useState } from "react";
import styled from "styled-components";
import components from ".";

const Container = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(125, 140, 255);
    font-weight: bold;
    color: ${(props) => (props.isDone ? "gray" : "rgb(125, 140, 255)")};
    text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
    margin-bottom: 0.5rem;
    cursor: pointer;
`;
const CheckBox = styled.input`
    width: 5%;
    height: 60%;
    cursor: pointer;
`;
const Title = styled.span`
    font-size: 1.1rem;
    /* background-color: black; */
    width: 50%;
`;
const DateText = styled.span`
    width: 25%;
    text-align: center;
    font-size: 0.9rem;
    /* background-color: black; */
`;
const DelBtn = styled.span`
    cursor: pointer;
    text-align: center;
    /* background-color: black; */
    width: 6%;
`;
const Todo = ({ id, title, content, create_date, checked, onToggle, onDelete }) => {
    const { TodoModal } = components;
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
            <CheckBox type="checkbox" checked={checked} onChange={() => onToggle(id)} />
            <Title onClick={() => onModalOpen()}>{title}</Title>
            <DateText>{create_date}</DateText>
            <DelBtn onClick={() => onDelete(id)}>❌</DelBtn>
            <TodoModal title={title} content={content} onRequestClose={onModalClose} isOpen={modalOpen} />
        </Container>
    );
};

export default Todo;
