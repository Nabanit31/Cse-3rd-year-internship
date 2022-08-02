import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <section className="navbar-bg">
      <nav className="navbar navbar-expand-lg  navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Renting Car
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="justify-content-end  collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled"></a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      </section>
    </div>
  );
}
export default Navbar;
