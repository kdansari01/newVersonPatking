import car from "../utils/car2.gif";
import "../styles.css";
import "./landing.css"
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        <div className="title d-flex justify-content-center  ">
          <h1>
            <span className="mx-4">Parking for everybody,</span> <br />
            Just click and booked slots
            <div className="text-center">
              <p className="para">Precise location and powerful Security
              <br/>

              </p>
            </div>
            <div className="bookbtn">
              <Link to="/booking">
                <button className=" btn btn-primary">Book Now &#128664;</button>
              </Link>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

{
  /* <div className="mt-4 mb-4 d-flex justify-content-end">
<Link to="/booking">
  <button className="btn btn-primary">Book Now &#128664;</button>
</Link>
</div> */
}

export default LandingPage;
