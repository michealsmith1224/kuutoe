import { useNavigate } from "react-router-dom";

export const ProtectedRoutes = ({ setpage, children }) => {
  const navigate = useNavigate();
  if (localStorage.getItem("email") !== null) {
    return children;
  }
  return navigate("/");
};
