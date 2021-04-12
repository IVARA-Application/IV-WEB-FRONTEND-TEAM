import React, { useState } from "react";
import { render } from "react-dom";
import "./Contact.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import { baseUrl } from "../../constants/index";
import axios from "axios";

const Form2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState();

  const onSubmit = () => {
    const details = { name: name, email: email, query: query };
    console.log(details);

    axios
      .post(
        "https://mnua40by72.execute-api.ap-south-1.amazonaws.com/latest/user/contact-us",
        details
      )
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .catch((error) => {
        console.log("post contact us", error.message);
      });

    setEmail("");
    setName("");
    setQuery("");
  };

  return (
    <Form>
      <div class="fade-in">
        <content>
          {" "}
          <p>
            It’s just the beginning in
            <br /> re-imagining the Indian
            <br />
            Education
          </p>
          <p>
            <span> We have a lot coming sooon!!</span>
          </p>{" "}
        </content>
        <n>
          <p>
            Drop down your Queries and we will
            <br /> be right back with our answers!
          </p>
          <FormGroup>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Label for="name">Name</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Label for="email">Email</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="message"
              id="message"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <Label for="message">Query</Label>
          </FormGroup>
          <Button
            onClick={() => {
              onSubmit();
            }}
          >
            Submit
          </Button>
        </n>
      </div>
    </Form>
  );
};

const Footer = () => (
  <footer className="footer">
    <div class="fade-in">
      <p>
        <div id="pop">
          Mon - Fri: 10:00 - 17:00
          <br />
          Closed on Weekends
          <br />
          <br />
          Connect with us through
          <br />
          WhatsApp at 24 x 7
        </div>
      </p>

      <p>
        <div id="pop">
          <span>Contact Us:</span>
          <br />
          <br />
          784 0879 398
          <br />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hello@iventorsinitiatives.com "
            target="_blank"
          >
            hello@iventorsinitiatives.com
          </a>
          <br />
          Lucknow, India <br />
          Chennai, India
        </div>
      </p>

      <p>
        <div id="pop">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hello@iventorsinitiatives.com "
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQs
          </a>
          <br />
          Blogs
          <br />
          <a href="https://www.mentorbaba.in/">MentorBaba</a>
          <br />
          <a href="healmymind.in">HealMyMind</a>
          <br />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hello@iventorsinitiatives.com "
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms
          </a>
        </div>
      </p>
    </div>
  </footer>
);

const Copyright = () => (
  <footer>
    <div class="fade-in">
      <p>
        <div id="pulse">
          <a
            className="footer-social-Icons"
            href="https://m.facebook.com/ivarabyiv/"
          >
            <FaFacebook size="20px" />
          </a>
        </div>
        <div id="pulse">
          <a
            className="footer-social-Icons"
            href="https://instagram.com/ivarabyiv?igshid=19ygjgncjkmuf"
          >
            <FaInstagram size="20px" />
          </a>
        </div>
        <div id="pulse">
          <a
            className="footer-social-Icons"
            href="https://www.linkedin.com/company/iventorsinitiatives"
          >
            <FaLinkedin size="20px" />
          </a>
        </div>
      </p>
      <p>
        <div class="copy">2021 IVentors Initiatives Pvt. Ltd.</div>
      </p>
    </div>
  </footer>
);
render(
  [<Form2 key="1" />, <Footer key="2" />, <Copyright key="3" />],
  document.getElementById("root")
);

export { Form2, Footer, Copyright };
