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
  width: 4%;
  height: 50%;
  cursor: pointer;
`;
const Title = styled.span`
  font-size: 0.8rem;
  font-family: "Nunito";
  width: 55%;
`;
const DateText = styled.span`
  width: 25%;
  text-align: center;
  font-family: "Nunito";
  font-size: 0.9rem;
`;
const DelBtn = styled.span`
  cursor: pointer;
  text-align: center;
  width: 6%;
`;
const Todo = ({
  id,
  title,
  content,
  create_date,
  checked,
  onToggle,
  onDelete,
  onUpdate,
}) => {
  const { DetailModal } = components;
  const [modalOpen, setModalOpen] = useState(false);
  const onModalClose = () => {
    setModalOpen(false);
  };
  const onModalOpen = () => {
    setModalOpen(true);
  };
  return (
    <Container>
      <CheckBox
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(id)}
      />
      <Title onClick={() => onModalOpen()}>
        {title.length > 12 ? `${title.substr(0, 12)}...` : title}
      </Title>
      <DateText>{create_date}</DateText>
      <DelBtn onClick={() => onDelete(id)}>❌</DelBtn>
      <DetailModal
        id={id}
        title={title}
        content={content}
        create_date={create_date}
        onRequestClose={onModalClose}
        onUpdate={onUpdate}
        isOpen={modalOpen}
      />
    </Container>
  );
};

export default Todo;
