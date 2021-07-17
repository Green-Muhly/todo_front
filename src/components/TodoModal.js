import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

const customStyles = {
    overlay: {
        background: "rgba(0, 0, 0, 0.6)",
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "85%",
        height: "40%",
        // borderRadius: "1rem",
        boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.2)",
        border: "1px solid rgb(125, 140, 255)",
        padding: 0,
        backgroundColor: "rgb(125, 140, 255)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
};

const ModalHeader = styled.div`
    height: 20%;
    width: 100%;
    background-color: rgb(125, 140, 255);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
const Title = styled.h2`
    font-weight: 600;
    font-size: 1.05rem;
    font-family: sans-serif;
    color: white;
    width: 80%;
`;
const CloseBtn = styled.span`
    cursor: pointer;
    color: white;
    font-size: 1.6rem;
    font-family: sans-serif;
`;
const ModalBody = styled.div`
    background-color: white;
    height: 79%;
    width: 98%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
`;
const ModalBottom = styled.div`
    /* background-color: red; */
    height: 20%;
`;

const TodoModal = ({ isOpen, onRequestClose, title, content }) => {
    return (
        <Modal style={customStyles} ariaHideApp={false} isOpen={isOpen} contentLabel="Selected Todo" onRequestClose={onRequestClose}>
            <ModalHeader>
                <Title>{title}</Title>
                <CloseBtn onClick={onRequestClose}>x</CloseBtn>
            </ModalHeader>
            <ModalBody />
        </Modal>
    );
};

export default TodoModal;
