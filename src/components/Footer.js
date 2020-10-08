import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Row className="py-4 align-items-center brd-bottom">
          <Col md="8">
            <p className="footer-green-text green-text">
              Thank you for supporting us!
            </p>
            <p className="footer-navy-text navy-text">
              Let's get in touch on any of these platforms.
            </p>
          </Col>
          <Col md="4" className="px-0">
            <a href="#">
              <i className="fab fa-twitter icon icon-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook icon icon-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-dribbble icon icon-dribble"></i>
            </a>
            <a href="#">
              <i className="fab fa-github icon icon-github"></i>
            </a>
          </Col>
        </Row>
        <hr/>
        <div className="copyright d-flex justify-content-between align-items-center py-3">
          <p className="navy-text-muted">© 2018 <span className="green-text">Şikayetvar</span></p>
          <Link to="/" className="link">Posts</Link>
        </div>
      </div>
    </footer>
  );
}
