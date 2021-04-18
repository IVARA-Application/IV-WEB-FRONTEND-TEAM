import React, { useState, useEffect } from "react";

import "./Faq.css";
import { Card } from "react-bootstrap";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";

export default function Faq() {
  const [currentSelected, setCurrentSelected] = useState(-1);
  const [loadingText, setLoadingText] = useState("Loading FAQs...");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(
          "https://hro2ywog4d.execute-api.ap-south-1.amazonaws.com/latest/frontend/faq"
        )
        .then((response) => {
          setFaqData(response.data);
          setDataLoaded(true);
        });
    } catch (error) {
      console.error(error);
      setLoadingText(error.message);
    }
  });
  return (
    <div className="faqMasterContainer m-3 m-md-5 p-3 p-md-5">
      <p style={{ fontWeight: "bold" }} className="text-uppercase faqHeading">
        Frequently Asked Questions
      </p>
      <div
        className={dataLoaded ? "d-none" : "d-block"}
        style={{ width: "100%", textAlign: "center" }}
      >
        {loadingText}
      </div>
      <div className={dataLoaded ? "d-block" : "d-none"}>
        {faqData.map((element, index) => {
          return (
            <Card style={{ width: "100%" }} className="my-2">
              <Card.Body>
                <Card.Title
                  style={{ width: "100%", margin: 0, cursor: "pointer" }}
                  onClick={() => {
                    setCurrentSelected(index);
                  }}
                >
                  <p className="d-inline-block">
                    {`${index + 1}) `}
                    {element.question}
                  </p>
                  <p className="float-right d-inline-block">
                    <ExpandMoreIcon />
                  </p>
                </Card.Title>
                <Card.Text
                  className={currentSelected === index ? "d-block" : "d-none"}
                >
                  {element.answer}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
