import { NavLink } from "react-router-dom";
import web from "../src/images/img-1.srg.webp";
import './index.css';
import Navbar from "./pages/Navbar";
import weeb from "../src/images/istockphoto-1160267132-640_adpp_is.mp4";
function Register()  {
  return (
    <div>
      <Navbar/>
      <div>
        <video autoPlay loop muted plays-Inline className="back-video">
          <source src={weeb} type="video/mp4"></source>
        </video>
      </div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1> Start buying with<strong className="brand-name"> Renting Cars</strong></h1>
                <h2 className="my-3">
                  The car will be your Door Step
                </h2>
                <h3>Register Yourself</h3>
                <div className="mt-3">
                  <NavLink to=""className="btn-vendor">Vendor</NavLink>
                  <br></br><br></br>
                  <NavLink to=""className="btn-customer">
                    Customer</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src= {web} className="img-fluid animated" alt="home img"/>
              </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      
    </div>
  )
}

export default Register
