import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import loginLogo from "../../images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import couraselimg1 from "../../images/img-4.jpeg";
import couraselimg2 from "../../images/img-5.jpg";
import couraselimg3 from "../../images/img-6.jpg";
import couraselimg4 from "../../images/img-7.jpg";

import "./login.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Btn } from "../../components/buttonComponent/button";
import { LogoComponent } from "../../components/logocomponent/logocomponent";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={5}>
            <Container className="p-3">
              <div className="loginlogo my-5">
                <LogoComponent
                  borderradius={"50%"}
                  color={"#000"}
                  text={"kuutoe"}
                  image={loginLogo}
                />
              </div>
              <div className=" px-0 px-md-5">
                <h4 className="login-heading mb-3">Login to Your Account</h4>
                <div className="buttons d-flex flex-column flex-lg-row align-items-center gap-2 mb-4 ">
                  <Btn
                    loginicons={"bi bi-facebook"}
                    padding={"3%"}
                    width={"100%"}
                    text={"Login with Facebook"}
                  />

                  <Btn
                    svg={
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 48 48"
                        enableBackground="new 0 0 48 48"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        ></path>
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        ></path>
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        ></path>
                      </svg>
                    }
                    color={"#000"}
                    width={"100%"}
                    padding={"3%"}
                    text={"Login with Google"}
                  />
                </div>
                <div className="horizontal-line  pb-4 mt-4 mb-2">
                  <h4>OR</h4>
                </div>
                <div className="forms">
                  <Form.Control
                    size="lg"
                    type="text"
                    className="mb-4"
                    placeholder="Email"
                  />
                  <Form.Control
                    size="lg"
                    type="password"
                    placeholder="Password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
                <p className="text-end text-secondary mt-2">Forget Password</p>
                <Btn
                  text={"Login into your account"}
                  padding={"13px 34px"}
                  color={"#fe0036"}
                  classname={"login-button "}
                  onclick={() => navigate("/")}
                />
                <p className="mt-4 text-secondary login-form-link">
                  Don't have an account?{" "}
                  <strong className="text-dark">
                    <Link to="/auth/register">Sign Up</Link>
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
