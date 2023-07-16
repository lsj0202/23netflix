import React, { useEffect, useState } from "react";
import "./Style.css";

const Index = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
        className="nav__logo"
        onClick={() => {
          window.location.reload();
        }} // image clisk -> reload
      />

      <img
        alt="User logged"
        src="https://avatars.githubusercontent.com/u/6759280?v=4"
        className="nav__avartar"
      />
    </nav>
  );
};

export default Index;
