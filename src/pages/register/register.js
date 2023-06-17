import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import loginLogo from "../../images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import couraselimg1 from "../../images/img-4.jpeg";
import couraselimg2 from "../../images/img-5.jpg";
import couraselimg3 from "../../images/img-6.jpg";
import couraselimg4 from "../../images/img-7.jpg";

import "./register.css";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Btn } from "../../components/buttonComponent/button";
import { LogoComponent } from "../../components/logocomponent/logocomponent";
// import { useEffect } from "react";

export const Register = () => {
  // useEffect(() => {
  //   var headers = new Headers();
  //   headers.append("X-CSCAPI-KEY", "API_KEY");

  //   var requestOptions = {
  //     method: "GET",
  //     headers: headers,
  //     redirect: "follow",
  //   };

  //   fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // });
  const navigagte = useNavigate();
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={5}>
            <Container className="p-3">
              <div className="loginlogo my-5 ">
                <LogoComponent
                  borderradius={"50%"}
                  color={"#000"}
                  text={"kuutoe"}
                  image={loginLogo}
                />
              </div>
              <div className=" px-0 px-md-5">
                <h4 className="login-heading mb-3 mb-lg-0">
                  Create a New Account
                </h4>

                <div className="forms mb-4">
                  <Form.Control
                    size="lg"
                    type="text"
                    className="mb-4"
                    placeholder="Full name"
                  />
                  <Form.Select
                    className="mb-4"
                    size="lg"
                    aria-label="Default select example"
                  >
                    <option>Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control
                    size="lg"
                    type="text"
                    className="mb-4"
                    placeholder="Email Address"
                  />
                  <Form.Control
                    size="lg"
                    type="password"
                    placeholder="Password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
                <Btn
                  text={"Create Account"}
                  padding={"13px 34px"}
                  color={"#fe0036"}
                  classname={"login-button "}
                  onclick={() => navigagte("/")}
                />
                <p className="mt-4 text-secondary login-form-link">
                  I have an account!
                  <strong className="text-dark ms-2">
                    <Link to="/auth/login">Sign in</Link>
                  </strong>
                </p>
              </div>
              <footer className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
                <div className="social_links d-flex gap-3">
                  <i class="bi bi-facebook fs-5 "></i>
                  <i class="bi bi-instagram fs-5 "></i>
                  <i class="bi bi-linkedin fs-5 "></i>
                  <i class="bi bi-twitter fs-5 "></i>
                </div>
                <div className="footer_items">
                  <span>Terms & Condition</span>
                  <span className="ms-2">Privacy Policy</span>
                </div>
              </footer>
            </Container>
          </Col>
          <Col className="d-none d-md-block" lg={7}>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100 c-img "
                  src={couraselimg1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 c-img "
                  src={couraselimg2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item className="login-courasel">
                <img
                  className="d-block w-100 c-img "
                  src={couraselimg3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 c-img"
                  src={couraselimg4}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};
