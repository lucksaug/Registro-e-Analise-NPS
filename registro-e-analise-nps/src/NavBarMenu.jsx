//Bootstrap
import Nav from 'react-bootstrap/Nav';

//React
import React from "react";

const NavBarMenu = () => {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="analise">Analise</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBarMenu;
