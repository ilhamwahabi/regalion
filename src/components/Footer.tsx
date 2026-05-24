import React from "react";
import { Navbar, NavItem, NavLink, Nav, Container } from "reactstrap";
import { css } from "@emotion/css";
import { FaRegCopyright, FaTwitter, FaGithub } from "react-icons/fa";

const { twitter, github } = {
  twitter: "https://twitter.com/ilhamwahabigx",
  github: "https://github.com/ilhamwahabi/regalion",
};

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: string | number;
  title?: string;
};

const CopyrightIcon = FaRegCopyright as React.ComponentType<IconProps>;
const TwitterIcon = FaTwitter as React.ComponentType<IconProps>;
const GithubIcon = FaGithub as React.ComponentType<IconProps>;

const Footer = () => {
  const renderCopyright = () => (
    <Nav className="w-100 d-flex justify-content-center justify-content-lg-between">
      <NavItem>
        <NavLink className="text-center">
          <CopyrightIcon
            style={{ marginBottom: 3, marginRight: 5, fontSize: 15 }}
          />
          Nintendo, Game Freak, and The Pokémon Company
        </NavLink>
      </NavItem>
    </Nav>
  );

  const renderSocialMedia = () => (
    <Nav className="ml-auto d-none d-lg-flex" navbar>
      <NavItem>
        <NavLink href={twitter} target="_blank" rel="noopener">
          <TwitterIcon style={{ marginRight: 5, fontSize: 18 }} />
          @ilhamwahabigx
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={github} target="_blank" rel="noopener">
          <GithubIcon style={{ marginRight: 5, fontSize: 18 }} />
          iwgx
        </NavLink>
      </NavItem>
    </Nav>
  );

  return (
    <footer className="section-navbars">
      <div id="footer">
        <div className="navigation">
          <Navbar className={navigationStyle} expand="sm">
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

const navigationStyle = css`
  z-index: 10;
  background: transparent;

  @media (max-width: 1024px) {
    padding-top: 10%;
  }

  @media (max-width: 480px) {
    padding-top: 5%;
  }
`;

export default Footer;
