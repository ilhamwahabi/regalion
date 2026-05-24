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
    <Nav className="d-flex justify-content-center">
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
    <Nav className={socialNavStyle} navbar>
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
            <Container className={footerContainerStyle}>
              {renderCopyright()}
              {renderSocialMedia()}
            </Container>
          </Navbar>
        </div>
      </div>
    </footer>
  );
};

const footerContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const socialNavStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 0;
  padding: 0;

  @media (min-width: 992px) {
    margin-left: auto;
  }
`;

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
