import React, { Component } from "react";
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="section-navbars fixed-bottom">
        <div id="footer">
          <div className="navigation">
            <Navbar className="navbar-transparent" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="https://iwgx.github.io/" target="_blank">
                    <i className="far fa-copyright" /> Ilham Wahabi 2019
                  </NavbarBrand>
                </div>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/ilhamwahabigx"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                      @ilhamwahabigx
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/iwgx/regalion"
                      target="_blank"
                    >
                      <i className="fab fa-github" />
                      iwgx
                    </NavLink>
                  </NavItem>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
