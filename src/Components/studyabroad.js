import card1 from "./images/course.svg";
import card2 from "./images/news.svg";
import card3 from "./images/scholarships.svg";
import React from "react";
import "./studyabroad.css";

const StudyAbroad = () => {
  return (
    <div className=" container-fluid">
    <div className="row">
      <div className="col-lg-6">
       <div className="rect1">
        <img src={card1} alt="" srcset="" />
        <h2>Courses</h2>
       </div>
      </div>
        <div className="col-lg-6">
        <div className="rect2">
          <img src={card2}></img>
          <h2>News and Blogs</h2>
        </div>
        </div>
    </div>
    <div className="row col offset-1">
        <div className=" rect3">
          <img src={card3}></img>
          <h2>Scholarships</h2>
        </div>
        </div>
    </div>

  );
};

export default StudyAbroad;
