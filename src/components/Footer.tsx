import React from "react";
import { Navbar, NavItem, NavLink, Nav, Container } from "reactstrap";

const Footer = () => {
  const renderCopyright = () => (
    <Nav className="w-100 d-flex justify-content-center justify-content-sm-between">
      <NavItem>
        <NavLink>
          <i className="far fa-copyright" /> Nintendo, Game Freak, and The
          Pokémon Company
        </NavLink>
      </NavItem>
    </Nav>
  );

  const renderSocialMedia = () => (
    <Nav className="ml-auto d-none d-sm-flex" navbar>
      <NavItem>
        <NavLink href="https://twitter.com/ilhamwahabigx" target="_blank">
          <i className="fab fa-twitter" />
          @ilhamwahabigx
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/iwgx/regalion" target="_blank">
          <i className="fab fa-github" />
          iwgx
        </NavLink>
      </NavItem>
    </Nav>
  );

  return (
    <footer className="section-navbars">
      <div id="footer">
        <div className="navigation">
          <Navbar className="navbar-transparent" expand="sm">
            <Container>
              {renderCopyright()}
              {renderSocialMedia()}
            </Container>
          </Navbar>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
