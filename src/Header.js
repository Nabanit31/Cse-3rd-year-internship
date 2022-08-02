import React from "react";
import beep from "./images/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg";
import image from "./images/new-user-registration-4489362-3723269.webp";


const Header = () => {
  return (
    <>
      <select className="form-select" aria-label="Default select example">
        <option selected="">Select Town</option>
        <option value={1}>Agartala</option>
        <option value={2}>Udaipur</option>
        <option value={3}>Teliamura</option>
      </select>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1>
                Find your drive
                <br></br>
              </h1>
              <p className="main-hero-para">
                Pretty much anyone can book a trip, but not everyone can plan an
                ultimate adventure that's affordable, accommodating, and fun for
                everyone in your group. At TripsInsider.com, we aim to provide
                you with the best insider secrets in the travel business and a
                state-of-the-art travel comparison tool to make planning easier
                than ever.
              </p>
              <h3>Book a car</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pil w-75 me-3 p-2 form-contol-text"
                  placeholder="Enter your area"
                ></input>
                <div className="input-group-text">Get it now</div>
              </div>
            </div>
            {/* ==============================main header right side========
             */}
            <div
              className="col-12 col-lg-6 header-right-side d-flex 
             justify-content-center align-items-center main-herosection-images"
            >
              <img src={beep} alt="logo" className="img-fluid"></img>

              <img
                src={image}
                alt="logo"
                className="img-fluid main-hero-img2"
              />
            </div>
            {/* ===============================UI Design============================ */}
            <div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
      
    </div>
  </div>
</div>





<>
  <label className="form-label" htmlFor="customRange2">
    Hours you need to spent(1-6)
  </label>
  <div className="range">
    <input
      type="range"
      className="form-range"
      min={0}
      max={6}
      id="customRange2"
    />
  </div>
</>
<>
  <label htmlFor="customRange3" className="form-label">
    Km driving
  </label>
  <div className="range">
    <input
      type="range"
      className="form-range"
      min={0}
      max={100}
      step="0.5"
      id="customRange3"
    />
  </div>
</>
       </div>
          
        </section>
        
        
      </header>


      {/* ====================================fotter+++++++++++++++++++++++++++++++++++++++++++ */}
      <section className="">
  {/* Footer */}
  <footer
    className="text-center text-white"
    style={{ backgroundColor: "#0a4275" }}
  >
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: CTA */}
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <button type="button" className="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
      {/* Section: CTA */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      Our team Members:
      <a className="text-white" href="https://mdbootstrap.com/">
        Aniket,basabjit,samyadeep,Nabanit
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
  <>
  {/* Footer */}
  <footer className="bg-dark text-center text-white">
    {/* Grid container */}
    <div className="container p-4">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f" />
        </a>
        {/* Twitter */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter" />
        </a>
        {/* Google */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-google" />
        </a>
        {/* Instagram */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-instagram" />
        </a>
        {/* Linkedin */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        {/* Github */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-github" />
        </a>
      </section>
      {/* Section: Social media */}
      {/* Section: Form */}
      <section className="">
        <form action="">
          {/*Grid row*/}
          <div className="row d-flex justify-content-center">
            {/*Grid column*/}
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-5 col-12">
              {/* Email input */}
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="form5Example21"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form5Example21">
                  Email address
                </label>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-auto">
              {/* Submit button */}
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </form>
      </section>
      {/* Section: Form */}
      {/* Section: Text */}
      <section className="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          distinctio earum repellat quaerat voluptatibus placeat nam, commodi
          optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi
          voluptate quas.
        </p>
      </section>
      {/* Section: Text */}
      {/* Section: Links */}
      <section className="">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </section>
      {/* Section: Links */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

</section>

    </>
    
  );
};

export default Header;
