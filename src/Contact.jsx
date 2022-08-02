import { useState } from "react";
import weeeb from "../src/images/istockphoto-1161450928-640_adpp_is.mp4";
function Contact() {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    Email: "",
    msg: "",
  });

  function InputEvent(event) {
    const { name, value } = event.target;

    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  return (
    <>
    <div>
        <video autoPlay loop muted plays-Inline className="auto-video">
          <source src={weeeb} type="video/mp4"></source>
        </video>
        <section id="header1" className="d-flex align-items-center"/>
      </div>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <form>
          <div className="col-md-6 col-10 mx-auto" />
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              FullName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="fullname"
              value={data.fullname}
              onChange={()=>InputEvent()}
              placeholder=" Your Name"
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              name="phone"
              value={data.phone}
              onChange={()=>InputEvent()}
              placeholder="0123456789"
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              name="email"
              value={data.Email}
              onChange={()=>InputEvent()}
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              name="msg"
              value={data.msg}
              onChange={()=>InputEvent()}
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="col-12">
            <button className="btn btn-outline-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
