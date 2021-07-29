import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
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
  font-size: 1.05rem;
  font-family: "Nunito";
  color: black;
  width: 80%;
`;
const CloseBtn = styled.span`
  cursor: pointer;
  color: grey;
  font-size: 1.6rem;
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
  font-family: "Nunito";
  font-size: 0.8rem;
  font-weight: bolder;
  color: gray;
  margin-bottom: 0.5rem;
`;
const Span = styled.span`
  margin-left: 0.5rem;
  width: 90%;
  border: none;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: "Nunito";
  line-height: 1.2rem;
  margin-bottom: 1.5rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  width: 35%;
  cursor: pointer;
  font-family: "Nunito";
  border: 1px solid rgb(125, 140, 255);
  border-radius: 0.3rem;
  background-color: ${(props) =>
    props.save === true ? "rgb(125, 140, 255)" : "white"};

  color: ${(props) => (props.save === true ? "white" : "rgb(125, 140, 255)")};
  height: 2rem;
`;

const Input = styled.input`
  margin-left: 0.5rem;
  width: 90%;
  border: none;
  border-left: 2px solid #c2c2c2;
  outline: none;
  font-family: "Nunito";
  padding-left: 0.3rem;
  font-size: 0.9rem;
  line-height: 1.2rem;
  margin-bottom: 1.5rem;
  ::placeholder {
    color: #c2c2c2;
    font-family: "Nunito";
    font-size: 0.9rem;
  }
`;
const DetailModal = ({
  isOpen,
  onRequestClose,
  title,
  content,
  id,
  create_date,
  onUpdate,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const setState = () => {
    setIsEdit((prev) => !prev);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setNewTitle(value);
    else if (name === "content") setNewContent(value);
  };
  const updateTodo = () => {
    console.log(newTitle, newContent);
    onUpdate(id, newTitle, newContent);
    setIsEdit(false);
    onRequestClose();
  };
  return (
    <Modal
      className=""
      style={customStyles}
      ariaHideApp={false}
      isOpen={isOpen}
      contentLabel="Selected Todo"
      onRequestClose={onRequestClose}
    >
      <ModalHeader>
        <Title>MY Task</Title>
        {/* x버튼을 이미지 혹은 아이콘으로 대체할 방법 찾기 */}
        <CloseBtn onClick={setState}>
          <EditIcon />
        </CloseBtn>
        <CloseBtn onClick={onRequestClose}>
          <CloseIcon />
        </CloseBtn>
      </ModalHeader>
      <ModalBody>
        <Label>TITLE</Label>
        {isEdit ? (
          <Input name="title" placeholder={title} onChange={onChange} />
        ) : (
          <Span>{title}</Span>
        )}

        <Label>CONTENT</Label>
        {isEdit ? (
          <Input name="content" placeholder={content} onChange={onChange} />
        ) : (
          <Span>{content}</Span>
        )}
        <ButtonContainer>
          {isEdit ? (
            <Button onClick={updateTodo} save={true}>
              수정
            </Button>
          ) : (
            <></>
          )}
          <Button onClick={onRequestClose}>취소</Button>
        </ButtonContainer>
      </ModalBody>
    </Modal>
  );
};

export default DetailModal;
