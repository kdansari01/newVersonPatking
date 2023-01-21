import { Link } from "react-router-dom"
import "./navbar.css"
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark sticky-top cursor-pointer px-4 ">
        <div className=" container-fluid  ">
          <Link className="navbar-brand text-light" to={"/"}>
            ParkingSlot <span>&#128664;</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse d-flex" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to={"/booking"}
                >
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/list">
                  List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/list">
                  Sollutions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/list">
                  Developers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/list">
                  Customer
                </Link>
              </li>
            </ul>
            <form className="d-flex text-light" role="search">
              <div className="logNsign loggin">
              <Link className="loginEff nav-link text-light">
                Login
                </Link>
              </div>
              <div className="logNsign signUp mx-2"> 
                <Link className="signUpEf nav-link text-light mx-3 ">
                Sign Up
                </Link>
              </div>
              
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
