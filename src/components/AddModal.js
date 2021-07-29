import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
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
    width: "23rem",
    height: "15rem",
    // borderRadius: "1rem",
    boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.2)",
    // border: "1px solid ",
    padding: 10,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const ModalHeader = styled.div`
  height: 15%;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 1.2rem;
  font-family: "Nunito";
  color: black;
  width: 80%;
`;
const CloseBtn = styled.span`
  cursor: pointer;
  color: grey;
  font-size: 1.6rem;
  font-family: "Nunito";
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
  font-size: 0.8rem;
  font-family: "Nunito";
  font-weight: bold;
  color: gray;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  margin-left: 0.5rem;
  width: 90%;
  border: none;
  border-left: 2px solid #c2c2c2;
  outline: none;
  padding-left: 0.3rem;
  font-size: 0.9rem;
  line-height: 1.2rem;
  font-family: "Nunito";
  margin-bottom: 1.5rem;
  ::placeholder {
    color: #c2c2c2;
    font-family: "Nunito";
    font-size: 0.9rem;
  }
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
  background-color: ${(props) =>
    props.save === true ? "rgb(125, 140, 255)" : "white"};

  color: ${(props) => (props.save === true ? "white" : "rgb(125, 140, 255)")};
  height: 2rem;
  font-family: "Nunito";
  font-weight: bold;
`;

const AddModal = ({ isOpen, onRequestClose, createTodo, addTodo }) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    createTodo(name, value);
  };
  const onSave = () => {
    addTodo();
    onRequestClose();
  };

  return (
    <Modal
      style={customStyles}
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel="Selected Todo"
      onRequestClose={onRequestClose}
    >
      <ModalHeader>
        <Title>Add Task</Title>
        {/* x버튼을 이미지 혹은 아이콘으로 대체할 방법 찾기 */}
        <CloseBtn onClick={onRequestClose}>
          <CloseIcon />
        </CloseBtn>
      </ModalHeader>
      <ModalBody>
        <Label>TITLE</Label>
        <Input name="title" onChange={onChange} placeholder="Task Title" />
        <Label>CONTENT</Label>
        <Input name="content" onChange={onChange} placeholder="Task Content" />
        <ButtonContainer>
          <Button save={true} onClick={onSave}>
            저장
          </Button>
          <Button onClick={onRequestClose}>취소</Button>
        </ButtonContainer>
      </ModalBody>
    </Modal>
  );
};

export default AddModal;
