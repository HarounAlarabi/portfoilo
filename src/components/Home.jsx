import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "./Icon";






const Home = ({ name, title, greeting }) => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="main" id="main">
        <div className="main-heading">
          <h1 className="heading-text">
            <span className="heading-text--greeting">{greeting}</span>
            <span className="heading-text--main">{name}</span>
            <span className="heading-text--sub">{title}</span>
          </h1>
        </div>
        <div className="arrow">
          <Link className="btn btn--white" onClick={handleScrollDown}>
            <Icon icon="circle-down" className="btn__icon" />
          </Link>
        </div>
      </section>
    </>
  );

};
Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
