import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";

import "./footer.css";

const footerLinks = [
  { title: "FAQS", link: "/faq" },
  { title: "Blogs", link: "/" },
  { title: "MentorBaba", link: "https://www.mentorbaba.in" },
  { title: "HealMyMind", link: "https://www.healmymind.in" },
  { title: "Terms", link: "/" },
];

export default function Footer() {
  return (
    <>
      <div className="footer" style={{ width: "100vw", margin: 0 }}>
        <div
          className="row pt-5"
          style={{ width: "100%", textAlign: "center" }}
        >
          <div class="col-sm py-2">
            Mon - Fri: 10:00 - 17:00
            <br />
            Closed on Weekends
            <br />
            <br />
            Connect with us through
            <br />
            WhatsApp at 24 x 7
          </div>
          <div class="col-sm py-2">
            <h3>Contact Us</h3>
            <a href="tel:+917840879398">784 0879 398</a>
            <br />
            <a href="mailto:hello@iventorsinitiatives.com">
              hello@iventorsinitiatives.com
            </a>
            <br />
            Lucknow, India
            <br />
            Chennai, India
          </div>
          <div class="col-sm py-2">
            {footerLinks.map((element) => {
              return (
                <a href={element.link} className="d-block">
                  {element.title}
                </a>
              );
            })}
          </div>
          <div className="col-12 mt-3">
            <span
              className="px-2"
              title="Ivara on Facebook"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href = "https://www.facebook.com/ivarabyiv/";
              }}
            >
              <Facebook />
            </span>
            <span
              className="px-2"
              title="Ivara on Instagram"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href = "https://www.instagram.com/ivarabyiv/";
              }}
            >
              <Instagram />
            </span>
            <span
              className="px-2"
              title="Ivara on LinkedIn"
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/company/iventorsinitiatives/";
              }}
            >
              <LinkedIn />
            </span>
            <br />
            <span style={{ fontSize: "16px" }}>
              &copy; 2021 IVentors Initiatives Pvt. Ltd. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
