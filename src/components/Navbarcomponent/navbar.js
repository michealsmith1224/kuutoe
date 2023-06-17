import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoimg from "../../images/logo.jpg";
import { Btn } from "../buttonComponent/button";
import { NavLink } from "react-router-dom";
import { LogoComponent } from "../logocomponent/logocomponent";

export const NavbarComponent = () => {
  return (
    <>
      <nav style={{ backgroundColor: "#000" }}>
        <Navbar bg="" expand="md">
          <Container>
            <LogoComponent color={"#fff"} text={"kuutoe"} image={logoimg} />
            <Navbar.Toggle
              className="hamburger"
              aria-controls="basic-navbar-nav"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 20 20"
                height="1.3em"
                width="1.3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Navbar.Toggle>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="text-start text-md-end d-block mt-3 mt-md-0 gap-2 d-md-flex">
                <NavLink to="/auth/login">
                  <Btn
                    radius={"10px"}
                    textcolor={"#000"}
                    color={"#fff"}
                    text={"Login"}
                    margin={"0 6px"}
                  />
                </NavLink>

                <NavLink to="/auth/register">
                  <Btn textcolor={"#fff"} color={"#fe0036"} text={"Register"} />
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </>
  );
};
