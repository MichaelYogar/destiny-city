import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { MdWork } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <h1>Company Mission</h1>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <>
            {" "}
            WhereToWork is a website that shows users the best cities to live in
            based on a wide variety of information. This ranges from salary
            information, cost of living, and much more! Explore the most up to
            date and relevant information about our world today! WhereToWork is
            still in development. Website created by: Michael Yogar{" "}
          </>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <MdWork className="navbar-icon" />
              W2W
            </Link>
          </div>
          <small className="website-rights">W2W © 2021</small>
          <div className="social-icons">
            {/* <Link
              className="social-icon-link"
              to={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link> */}
            <Link
              className="social-icon-link"
              to="//github.com/MichaelYogar/where-to-work"
              target="_blank"
              aria-label="Github"
            >
              <AiFillGithub />
            </Link>
            <Link
              className="social-icon-link"
              to="//michaelyogar.com"
              target="_blank"
              aria-label="personal-website"
            >
              <BsPersonSquare />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
