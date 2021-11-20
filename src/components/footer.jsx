import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagramSquare,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-dark mt-3">
        <div className="row text-left">
          <div className="col-md-5 col-sm-5 p-3">
            <h4 className="text-light">About us</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              maxime ea similique illum corrupti
            </p>
            <p className="pt-4 text-muted">Copyright &copy;2021 Arshed Ahmed</p>
          </div>
          <div className="col-md-5 col-sm-12 p-3">
            <h4 className="text-light">Newsletter</h4>
            <p className="text-muted">Stay Updated</p>
            <form className="form-inline">
              <div className="col pl-0">
                <div className="input-group pr-5 pe-2">
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Email"
                    aria-describedby="btn-addon"
                  />
                  <button
                    className="btn btn-secondary"
                    type="button"
                    id="btn-addon"
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-2 col-sm-12 p-3">
            <h4 className="text-light">Follow Us</h4>
            <p className="text-muted">Let us be social</p>
            <div className="column text-light fs-4">
              <FontAwesomeIcon icon={faFacebookSquare} />
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={faTwitter} />
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={faInstagramSquare} />
              &nbsp;&nbsp;
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
