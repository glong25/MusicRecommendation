import "../Styles/Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="footer__container">
          <div className="footer__title">
            <h1 className="footer__title-text">Song Recommendation</h1>
          </div>
          <div className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <NavLink
                  to="/home"
                  onClick={this}
                  className="footer__nav-item--link"
                >
                  Home
                </NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink
                  to="/books"
                  onClick={this}
                  className="footer__nav-item--link"
                >
                  Privacy Center
                </NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink
                  to="/home"
                  onClick={this}
                  className="footer__nav-item--link"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink
                  to="/home"
                  onClick={this}
                  className="footer__nav-item--link"
                >
                  About
                </NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink
                  to="/home"
                  onClick={this}
                  className="footer__nav-item--link"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="social-list">
            <i className="fa fa-google"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-youtube"></i>
            <i className="fa fa-pinterest"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <p className="coppyright">Copyright &copy; 2023</p>
      </div>
    </>
  );
}

export { Footer };
