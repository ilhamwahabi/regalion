import React from "react";
import { Navbar, NavItem, NavLink, Nav, Container } from "reactstrap";

const { twitter, github } = {
  twitter: "https://twitter.com/ilhamwahabigx",
  github: "https://github.com/iwgx/regalion"
};

const Footer = () => {
  const renderCopyright = () => (
    <Nav className="w-100 d-flex justify-content-center justify-content-sm-between">
      <NavItem>
        <NavLink className="text-center">
          <i className="far fa-copyright" /> Nintendo, Game Freak, and The
          Pokémon Company
        </NavLink>
      </NavItem>
    </Nav>
  );

  const renderSocialMedia = () => (
    <Nav className="ml-auto d-none d-sm-flex" navbar>
      <NavItem>
        <NavLink href={twitter} target="_blank">
          <i className="fab fa-twitter" />
          @ilhamwahabigx
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={github} target="_blank">
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
          <Navbar
            style={{ zIndex: 10 }}
            className="navbar-transparent"
            expand="sm"
          >
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
