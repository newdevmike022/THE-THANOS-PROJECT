import React from "react";
import thanos from "../assets/thanos.png";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <i className="fas fa-bars pt-3"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto pt-5">
            <li className="nav-item hvr-float">
              <a className="nav-link" href="#prologue">
                prologue
              </a>
            </li>
            <li className="nav-item hvr-float">
              <a className="nav-link" href="#power">
                power
              </a>
            </li>
            <li className="nav-item hvr-float">
              <a className="nav-link" href="#soul">
                soul
              </a>
            </li>
            <li className="nav-item hvr-float">
              <a className="nav-link" href="#time">
                time
              </a>
            </li>
            <li className="nav-item hvr-float">
              <a className="nav-link" href="#space">
                space
              </a>
            </li>
            <li className="nav-item hvr-float">
              <a className="nav-link" href="#reality">
                reality
              </a>
            </li>
            <li className="nav-item hvr-float">
              <a className="nav-link" href="#mind">
                mind
              </a>
            </li>
            <li className="nav-item hvr-float">
              <a className="nav-link" href="#epilogue">
                epilogue
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row">
        <div className="col-lg-12">
          <img className="thanos" src={thanos} alt="Thanos" />
        </div>
        <div className="col-lg-12">
          <h1 className="titan">The Diary Of A Mad Titan</h1>
          <p>By Thanos</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
