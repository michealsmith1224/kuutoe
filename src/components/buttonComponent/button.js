import Button from "react-bootstrap/Button";
import "./button.css";

export const Btn = ({
  text,
  icons,
  color,
  textcolor,
  radius,
  padding,
  margin,
  width,
  onclick,
  svg,
  loginicons,
  classname,
}) => {
  const btnstyles = {
    backgroundColor: color,
    color: textcolor,
    borderRadius: radius,
    padding: padding,
    margin: margin,
    width: width,
  };
  return (
    <>
      <Button onClick={onclick} className={classname} style={btnstyles}>
        {svg}
        <i className={loginicons}></i> <span>{text}</span>
        <i id="icons" className={icons}></i>
      </Button>
    </>
  );
};
