/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-center"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          <NavItem>
              <NavLink
                href="/presentacion"
              >
                <i className="nc-icon nc-pin-3" /> Presentación
              </NavLink>
            </NavItem>
          <NavItem>
              <NavLink
                href="/narrativa"
              >
                <i className="nc-icon nc-air-baloon" /> Narrativa
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/aventureros"
              >
                <i className="nc-icon nc-pin-3" /> Aventureros
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/niveles"
              >
                <i className="nc-icon nc-pin-3" /> Niveles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/recompensas"
              >
                <i className="nc-icon nc-money-coins" /> Recompensas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/retos"
              >
                <i className="nc-icon nc-chart-bar-32" /> Retos
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
