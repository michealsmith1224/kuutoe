import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export const LogoComponent = ({ text, image, color, borderradius }) => {
  return (
    <>
      <Navbar.Brand className="d-flex gap-2 justify-content-start align-items-center">
        <div className="logo_img">
          <NavLink to="/">
            <img
              style={{ borderRadius: borderradius }}
              src={image}
              width="60"
              height="60"
              className="d-inline-block align-top img-fluid"
              alt="React Bootstrap logo"
            />
          </NavLink>
        </div>
        <div style={{ color: color }} className="text">
          <NavLink style={{ color: color }} to="/">
            <h6>{text}</h6>
          </NavLink>
        </div>
      </Navbar.Brand>
    </>
  );
};
