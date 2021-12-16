import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Button = styled.button`
  padding: 20px;

  &:active,
  &:hover {
  }
`;

const GoBackBtn = () => {
  const navigate = useNavigate();

  const goBackHandler: MouseEventHandler<HTMLButtonElement> = () => {
    navigate(-1);
  };

  return (
    <Button type="button" aria-label="go back" onClick={goBackHandler}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Button>
  );
};

export default GoBackBtn;
