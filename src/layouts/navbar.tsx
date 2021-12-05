import { MouseEventHandler } from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import global from "../base/constants/global";
import responsive, { breakpoint } from "../base/constants/responsive";
import zIndex from "../base/constants/z-index";
import flexbox from "../base/mixins/flexbox";
import MenuButton from "../components/menuButton";
import NavList from "../components/navList";
import useNav from "../hooks/useNav";
import OverlayPortal from "../overlayPortal";
import Col from "./grids/col";
import Container from "./grids/container";
import Row from "./grids/row";
import Menubar from "./menubar";
import Overlay from "./overlay";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background-color: ${colors.variable.pink};
  border-bottom: solid 1px ${colors.variable.black};
  z-index: ${zIndex.navbar};
`;

const NavWrapper = styled.div`
  width: 100%;
  height: ${global.navHeight}px;
  padding-left: 12.5px;
  ${flexbox("space-between")}

  ${responsive.device["above-tablet"]} {
    padding-left: 0px;
  }
`;

const Navbar = () => {
  const { width, open, setOpen } = useNav();

  const menuToggleHandler: MouseEventHandler<
    HTMLButtonElement | HTMLDivElement
  > = () => setOpen((prev) => !prev);

  return (
    <>
      <Nav>
        <Container>
          <Row>
            <Col sm={4}>
              <NavWrapper>
                <div>borderline0px</div>
                {width < breakpoint.md ? (
                  <MenuButton toggleHandler={menuToggleHandler} open={open} />
                ) : (
                  <NavList />
                )}
              </NavWrapper>
            </Col>
          </Row>
        </Container>
      </Nav>
      {open && (
        <OverlayPortal>
          <Overlay toggleHandler={menuToggleHandler} />
        </OverlayPortal>
      )}
      <Menubar open={open} />
    </>
  );
};

export default Navbar;
