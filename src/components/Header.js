import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Welcome to Foodie Haven</h3>
            <p>
              Order your favorite dishes in your town, right to your doorstep!
            </p>
            <div className="banner__btn">
              <Link to="/thanks" className="btn btn-smart">
                DELIVERY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
