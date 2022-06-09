import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import MyButton from "../UI/button/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      {isAuth && <MyButton onClick={logout}>Вийти</MyButton>}
      <div className="navbar__links">
        <Link to="/about">
          <MyButton>Про сайт</MyButton>
        </Link>
        <Link to="/posts">
          <MyButton>Дописи</MyButton>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
