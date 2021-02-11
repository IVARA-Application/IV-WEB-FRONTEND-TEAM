import React from "react";
import girl from "../../img/entrance.png";
import arrow from "../../img/Arrow2.png";
import books from "../../img/books.png";
import { PypContainer } from "../../styles";

const PreviousYearSection = () => {
  return (
    <div>
      <PypContainer>
        <div className="img">
          <img className="girl1" src={girl} alt="" />
        </div>
        <div className="description">
          <h1>Previous Year papers</h1>
          <p>
            We offer a wide range of previous year papers and sample papers for
            classes 4-12
          </p>
          <img className="arrow" src={arrow} alt="" />
        </div>
      </PypContainer>
      <PypContainer>
        <div className="img">
          <img className="books" src={books} alt="" />
        </div>
        <div className="description">
          <h1>E-Books and E-Test Series</h1>
          <p>
            We have a vast range of E-books and E-test series for all subjects
            of classes 4-12
          </p>
          <img className="arrow" src={arrow} alt="" />
        </div>
      </PypContainer>
    </div>
  );
};

export default PreviousYearSection;
