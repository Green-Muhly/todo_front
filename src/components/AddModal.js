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
    height: 18%;
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
    height: 80%;
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.3rem;
`;
const Label = styled.div`
    margin-left: 0.5rem;
    /* background-color: red; */
    font-size: 0.9rem;
    font-weight: bolder;
    color: gray;
    margin-bottom: 0.25rem;
`;
const Input = styled.input`
    margin-left: 0.5rem;
    width: 90%;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
    font-size: 1rem;
    line-height: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-bottom: 1rem;
`;
const TextArea = styled.textarea`
    margin-left: 0.5rem;
    width: 90%;
    border: 1px solid gray;
    outline: none;
    font-size: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-bottom: 1rem;
    height: 3rem;
    resize: none;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;
const Button = styled.button`
    width: 35%;
    cursor: pointer;
    border: 1px solid rgb(125, 140, 255);
    border-radius: 0.3rem;
    background-color: ${(props) => (props.save === true ? "rgb(125, 140, 255)" : "white")};

    color: ${(props) => (props.save === true ? "white" : "rgb(125, 140, 255)")};
    height: 2rem;
`;
const AddModal = ({ isOpen, onRequestClose, title, content }) => {
    return (
        <Modal style={customStyles} ariaHideApp={false} isOpen={isOpen} contentLabel="Selected Todo" onRequestClose={onRequestClose}>
            <ModalHeader>
                <Title>Add Task</Title>
                {/* x버튼을 이미지 혹은 아이콘으로 대체할 방법 찾기 */}
                <CloseBtn onClick={onRequestClose}>X</CloseBtn>
            </ModalHeader>
            <ModalBody>
                <Label>Title</Label>
                <Input />
                <Label>Content</Label>
                <TextArea required />
                <ButtonContainer>
                    <Button save={true}>저장</Button>
                    <Button>취소</Button>
                </ButtonContainer>
            </ModalBody>
        </Modal>
    );
};

export default AddModal;
