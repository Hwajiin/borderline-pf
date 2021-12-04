import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import zIndex from "../base/constants/z-index";

interface OverlayProps {
  toggleHandler: MouseEventHandler<HTMLDivElement>;
}

const SOverlay = styled.div`
  position: fixed;
  top: 0;
  height: 0;
  width: 100vw;
  height: 100vh;
  overscroll-behavior: none;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  z-index: ${zIndex.overlay};
`;

const Overlay: React.FC<OverlayProps> = ({ toggleHandler }) => (
  <SOverlay aria-hidden onClick={toggleHandler}></SOverlay>
);

export default Overlay;
