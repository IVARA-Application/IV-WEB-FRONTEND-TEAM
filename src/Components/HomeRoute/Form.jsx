import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="secondSection container-fluid">
        <div className="row secondSectionFirstRow">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h1 className="big-heading sideFormHeading">
              It’s just the beginning in<br/> re-imagining the indian <br/>education
            </h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h1 className="big-heading sideFormHeading">We have a lot coming <br/>sooon!!</h1>
          </div>
        </div>

        <div className="col-lg-12 ">
          <div className="form">
            <h1 className="form-heading">
              Drop down your Queries and we will be right back with our answers!
            </h1>
            <div className=" form-input form-inline ">
              <input
                type="text"
                className="form-control w-50 "
                id="name"
                aria-describedby="addon-wrapping"
              />
              <label className="form-label" for="name">
                Name
              </label>
            </div>
            <div className=" form-input form-inline">
              <input
                type="email"
                className="form-control w-50"
                id="email"
                aria-describedby="addon-wrapping"
              />
              <label className="form-label" for="email">
                Email ID
              </label>
            </div>
            <div className=" form-input form-inline">
              <input
                type="text"
                className="form-control w-50"
                id="message"
                aria-describedby="addon-wrapping"
              />
              <label className="form-label" for="message">
                Message
              </label>
            </div>
            <div className=" form-input form-inline">
              <button type="button" class="btn formButton w-50">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
