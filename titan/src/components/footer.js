const today = new Date();

const Footer = () => {
  return (
    <section id="footer">
      <div className="row">
        <div className="col-lg-12">
          <p className="links">
            <a className="hvr-float" href="#prologue">
              PROLOGUE
            </a>
            <a className="hvr-float" href="#power">
              POWER
            </a>
            <a className="hvr-float" href="#soul">
              SOUL
            </a>
            <a className="hvr-float" href="#time">
              TIME
            </a>
            <a className="hvr-float" href="#space">
              SPACE
            </a>
            <a className="hvr-float" href="#reality">
              REALITY
            </a>
            <a className="hvr-float" href="#mind">
              MIND
            </a>
            <a className="hvr-float" href="#epilogue">
              EPILOGUE
            </a>
          </p>
          <p className="copyright pt-3">
            &copy; Sonicpress
            <span> {today.getFullYear()}</span>. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="col-lg-12">
        <a className="social hvr-float" href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a className="social hvr-float" href="#">
          <i className="fab fa-pinterest-square"></i>
        </a>
        <a className="social hvr-float" href="#">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a className="social hvr-float" href="#">
          <i className="fab fa-twitter-square"></i>
        </a>
      </div>
    </section>
  );
};

export default Footer;
