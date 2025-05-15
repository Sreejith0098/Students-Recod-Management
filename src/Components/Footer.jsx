import React from "react";
import "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "black", color: "white", marginTop:'-100px' }}
        className="conatiner-fluid  ps-4 "
      >
        <h4>The University</h4>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li>Academics</li>
              <li>Visit us</li>
              <li>contact us</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li>Our facilities</li>
              <li>Library</li>
              <li>Play ground </li>
              <li>Auditorium</li>
            </ul>
          </div>
          <div>
            <ul style={{ listStyle: "none" }}>
              <li>Contact With Us</li>
              <li>New students</li>
              <li>Alumni</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"./details"}
            >
              Details
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to={"./"}>
              Landing
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"./home"}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
