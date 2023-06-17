import { NavbarComponent } from "../../components/Navbarcomponent/navbar";
import "./landing.styles.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Btn } from "../../components/buttonComponent/button";
import headerImg from "../../images/main-img-home.jpg";
import timelineimage from "../../images/img-3.jpg";
import connectimage from "../../images/img-4.jpeg";
import happyimage from "../../images/img-1.jpeg";
import { Link, NavLink } from "react-router-dom";

export const LandingHomme = () => {
  const sectionItems = [
    {
      title: "Write your beautiful quotes to the world",
      headline: "TImeline",
      paragraph:
        "You have a beautiful thought the world ought not be deprived of. Be the philosopher of our time; share your thoughts to the world. Your food for thought could be the life-changing moment in someone's life. Be the change with your thoughts!",
      buttonContent: "start writing",
      icon: "bi bi-chat-left-quote-fill fs-4 text-white my-2",
      image: timelineimage,
    },
    {
      title:
        "Connect, acquaint and familiarise with People from different backgrounds.",
      headline: "Connect",
      paragraph:
        "Find people with similar and divergent views and opinions and connect. Share your experience and problems with people; as the apothegm goes 'A problem shared is half solved'. Find your helper, share your dream and problem with people and connect for greater pursuits.",
      buttonContent: "Connect with others",
      icon: "bi bi-router-fill fs-4 text-white my-2",
      image: connectimage,
      order: "order-first order-md-last ",
    },
    {
      title:
        "Experience blissful and funny moments which will put you on cloud nine",
      headline: "happy",
      paragraph:
        "A platform to share some interesting experiences. Put smiles on someone's face by sharing exciting and funny moments with emojis, stickers etc. Create Fun and laugh, it is a great therapy!.",
      buttonContent: "Have great fun",
      icon: "bi bi-emoji-smile-fill fs-4  text-white my-2",
      image: happyimage,
    },
  ];
  return (
    <>
      <nav>
        <NavbarComponent />
      </nav>
      <header className="py-5 px-2 banner-header">
        <Container className="mt-3">
          <Row className="align-items-center">
            <Col lg={6} className="">
              <h1 className="mt-3 mb-0 header_text  text-white fs-1">
                Take control of your mental health journey now!
              </h1>
              <p className="header_paragraph text-secondary">
                Join our inclusive mental health platform to share experiences,
                gain insights, find support, and connect with therapists. Start
                your journey towards well-being today!
              </p>

              <NavLink to="/auth/login">
                <Btn
                  padding={"10px 20px"}
                  margin={"30px 0"}
                  color={"#fe0036"}
                  text={"Join the Community"}
                />
              </NavLink>

              <div className="header_items pb-4 d-flex flex-column flex-lg-row justify-content-between align-items-lg-center align-items-start mt-4">
                <div className="items_">
                  <i class="bi bi-chat-left-quote-fill fs-3  text-white my-2"></i>
                  <h6 class="text-white">Make quotes</h6>
                  <p className="text-secondary">
                    Be the change with your thoughts!
                  </p>
                </div>
                <div className="items_">
                  <svg
                    className="text-white fs-3  my-2"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96,128A64,64,0,1,0,32,64,64,64,0,0,0,96,128Zm0,176.08a44.11,44.11,0,0,1,13.64-32L181.77,204c1.65-1.55,3.77-2.31,5.61-3.57A63.91,63.91,0,0,0,128,160H64A64,64,0,0,0,0,224v96a32,32,0,0,0,32,32V480a32,32,0,0,0,32,32h64a32,32,0,0,0,32-32V383.61l-50.36-47.53A44.08,44.08,0,0,1,96,304.08ZM480,128a64,64,0,1,0-64-64A64,64,0,0,0,480,128Zm32,32H448a63.91,63.91,0,0,0-59.38,40.42c1.84,1.27,4,2,5.62,3.59l72.12,68.06a44.37,44.37,0,0,1,0,64L416,383.62V480a32,32,0,0,0,32,32h64a32,32,0,0,0,32-32V352a32,32,0,0,0,32-32V224A64,64,0,0,0,512,160ZM444.4,295.34l-72.12-68.06A12,12,0,0,0,352,236v36H224V236a12,12,0,0,0-20.28-8.73L131.6,295.34a12.4,12.4,0,0,0,0,17.47l72.12,68.07A12,12,0,0,0,224,372.14V336H352v36.14a12,12,0,0,0,20.28,8.74l72.12-68.07A12.4,12.4,0,0,0,444.4,295.34Z"></path>
                  </svg>
                  <h6 class="text-white">Connect with people</h6>
                  <p className="text-secondary">
                    Find people with similar and divergent views
                  </p>
                </div>
                <div className="items_">
                  <i class="bi bi-emoji-smile-fill fs-3  text-white my-2"></i>
                  <h6 class="text-white">Be happy</h6>
                  <p className="text-secondary">Put smiles on someone's face</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="header_img">
                <img
                  src={headerImg}
                  alt=""
                  className="img-fluid d-none d-md-block"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      {sectionItems.map((items) => (
        <section className="banner-items px-2 px-md-0">
          <Container>
            <Row className="my-5 align-items-center flex-column flex-md-row gap-5 ">
              <Col className={items.order}>
                <img
                  className="img-fluid  section_img"
                  src={items.image}
                  alt=""
                />
              </Col>
              <Col className="section_col">
                <span className="text-white text-uppercase mt-5">
                  {items.headline}
                </span>
                <h2 className="text-white my-3">{items.title}</h2>
                <p>{items.paragraph}</p>
                <NavLink to="/auth/login">
                  <Btn
                    padding={"10px 20px"}
                    margin={"30px 0"}
                    color={"#fe0036"}
                    text={items.buttonContent}
                    icons={items.icon}
                  />
                </NavLink>
              </Col>
            </Row>
          </Container>
        </section>
      ))}

      <footer className="landing-footer">
        <Container>
          <div className="social_links py-5 ">
            <ul className="d-flex justify-content-center align-items-center ms-0 gap-3 gap-lg-5">
              <li className="">
                <i class="bi bi-facebook fs-3 text-white"></i>
              </li>
              <li>
                <i class="bi bi-instagram fs-3 text-white"></i>
              </li>
              <li>
                <i class="bi bi-linkedin fs-3 text-white"></i>
              </li>
              <li>
                <i class="bi bi-twitter fs-3 text-white"></i>
              </li>
              <li>
                <h6 class=" fs-4 text-white">@kuutoeapp</h6>
              </li>
            </ul>
          </div>

          <div className="footer_links py-4 pb-5 d-flex   flex-column flex-lg-row justify-content-between align-items-center">
            <div>
              <Link>Terms</Link>
              <Link>Privacy Policy</Link>
            </div>
            <div>
              <small className="fs-5">kuuote Copyright 2023</small>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};
