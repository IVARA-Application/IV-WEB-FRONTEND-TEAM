import React, { useState } from "react";
import "./Form.css";

import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState();

  const onSubmit = async () => {
    const details = { name: name, email: email, query: query };

    try {
      const response = await axios.post(
        "https://mnua40by72.execute-api.ap-south-1.amazonaws.com/latest/user/contact-us",
        details
      );
      alert(
        "Thank you for contacting IVARA! We will get back in touch with you shortly."
      );
    } catch (error) {
      alert(
        "We could not process your request. Please email us at hello@iventorsinitiatives.com"
      );
    }

    setEmail("");
    setName("");
    setQuery("");
  };

  return (
    <>
      <div className="secondSection container-fluid">
        <div className="row secondSectionFirstRow">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h1 className="big-heading sideFormHeading">
              It’s just the beginning in
              <br /> re-imagining the Indian <br />
              Education
            </h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <h1 className="big-heading sideFormHeading">
              We have a lot coming <br />
              sooon!!
            </h1>
          </div>
        </div>

        <div className="col-lg-12 ">
          <div className="form">
            <h1 className="form-heading">
              Drop down your Queries and we will be right back with our answers!
            </h1>
            <div className=" form-input form-inline formElement">
              <input
                type="text"
                className="form-control w-50 "
                id="name"
                placeholder="Your Name"
                aria-describedby="addon-wrapping"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label className="form-label" for="name">
                Name
              </label>
            </div>
            <div className=" form-input form-inline formElement">
              <input
                type="email"
                className="form-control w-50"
                id="email"
                placeholder="Your Email"
                aria-describedby="addon-wrapping"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className="form-label" for="email">
                Email ID
              </label>
            </div>
            <div className=" form-input form-inline formElement">
              <input
                type="text"
                className="form-control w-50"
                id="message"
                aria-describedby="addon-wrapping"
                placeholder="Your Message"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <label className="form-label" for="message">
                Message
              </label>
            </div>
            <div className=" form-input form-inline formElement">
              <button
                type="button"
                onClick={() => {
                  onSubmit();
                }}
                class="btn formButton w-50 "
              >
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
