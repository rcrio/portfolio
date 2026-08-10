import "./Home.css"
import pfp from "../assets/pfp.png"

function Home() {
  return (
    <main>
      <div className="container">
        <div className="row">
          {/* Left column */}
          <div className="col-md-4">
            <img src={pfp} alt="Profile picture" className="rounded-circle w-75" />
          </div>
          
          {/* Right column */}
          <div className="col-md-8">
            <h1>Hi! I'm Ricky.</h1>

            <hr></hr>

            <p>
              Otherwise known as rcrio.<br />
              Intern Software Engineer at <a className="link" href="https://www.arm.com/">Arm</a>.<br />
              BSc Computer Science at <a className="link" href="https://www.kcl.ac.uk/">King's College London</a>.
            </p>

            <div className="social-links d-flex gap-3">
              <a href="https://github.com/rcrio">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://linkedin.com/in/ricky-lh-chan">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https://youtube.com">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          

        </div>
      </div>
    </main>
  )
}

export default Home