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
            &copy; Mike Dodson
            <span> {today.getFullYear()}</span>.
          </p>
        </div>
      </div>
      <div className="col-lg-12">
        <a href="https://github.com/newdevmike22" className="social-icon">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/michael-dodson-197231b9/" className="social-icon">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Footer;
