import React from "react";
import { render } from "react-dom";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Form2 = () => {
  return (
    <Form>
      <div class="fade-in">
    <content>
      {" "}
      <p>It’s just the beginning in
        <br/> re-imagining the Indian<br/>
         Education</p>
      <p><span> We have a lot coming sooon!!</span></p>{" "}
    </content>
  <n>
    <p>Drop down your Queries and we will<br/> be right back with our answers!</p>
      <FormGroup>
        <Input type="text" name="name" id="name"/>
        <Label for="name">Name</Label>
      </FormGroup>
      <FormGroup>
        <Input type="email" name="email" id="email" />
        <Label for="email">Email</Label>
      </FormGroup>
      
      <FormGroup>
        <Input type="text" name="message" id="message"/>
        <Label for="message">Query</Label>
      </FormGroup>
      <Button>Submit</Button>
      </n>
      </div>
    </Form>
);
  }

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
  [<Form2 key="1" />, <Footer key="2" />, <Copyright key="3" />],
  document.getElementById("root")
);


export {Form2,Footer,Copyright};