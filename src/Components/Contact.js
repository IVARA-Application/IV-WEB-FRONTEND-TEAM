import React from "react";
import { render } from "react-dom";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";


const Form = () => (
  <form>
    <div class="fade-in">
    <content>
      {" "}
      <p>It’s just the beginning in
        <br/> re-imagining the Indian<br/>
         Education</p>
      <p><span> We have a lot coming sooon!!</span></p>{" "}
    </content>
  <n>
    <br/><br/>
    <p>Drop down your Queries and we<br/> will be right back with our answers!</p>
    <m>
      <input type="text" />
      Name
    </m>
    <m>
      <input type="email" />
      Email
    </m>
    <m>
      <input type="text" />
      Query
    </m>
    <span>
    <div id="push">
      <input type="submit" value="Submit" />
      </div>
      </span>
      </n>
    </div>

    
  </form>

);

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
      1800-xxxx-xxx
      <br />
      hello@iventorsinitiatives.com
      <br />
      Uttar Pradesh, India
      </div> 
    </p>
    

    
    <p>
    <div id="pop">
      FAQs
      <br />
      Blogs
      <br />
      MentorBaba
      <br />
      HealMyMind
      <br />
      Terms
      </div> 
    </p>
   
    </div>
  </footer>
);

const Copyright = () => (
  <footer>
        <div class="fade-in">
    <p>
      
      <div id="pulse"><FaFacebook size="20px"/></div>
      <div id="pulse"><FaInstagram size="20px"/></div>
      <div id="pulse"><FaTwitter size="20px"/></div>
      <div id="pulse"><FaYoutube size="20px"/></div>
      <div id="pulse"><FaLinkedin size="20px"/></div>
      
    </p>
    <p><div class="copy">2021 IVentors Initiatives Pvt. Ltd.</div></p>
    </div>
  </footer>
);
render(
  [<Form key="1" />, <Footer key="2" />, <Copyright key="3" />],
  document.getElementById("root")
);
export {Form,Footer,Copyright};