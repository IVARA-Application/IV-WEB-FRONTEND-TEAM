import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import IvaraNavbar from "../navbar/navbar";

import axios from "axios";

import "./videoRenderer.css";
import { Card, ListGroup } from "react-bootstrap";
import { ExpandLessOutlined, ExpandMoreOutlined } from "@material-ui/icons";

export default function VideoRenderer(props) {
  const [videoUrl, setVideoUrl] = useState(
    "https://s3.ap-south-1.amazonaws.com/ivaraedu.com/Recording+%233+-+Siddhi+Chandak.mp4"
  );
  const [units, setUnits] = useState([]);
  const [unitsLoaded, setUntitsLoaded] = useState(false);
  const [unitsLoadingText, setUnitsLoadingText] = useState("Loading units...");
  const [currentSelected, setCurrentSelected] = useState(-1);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoLoadingText, setVideoLoadingText] = useState("Loading video...");
  const [videoItem, setVideoItem] = useState({});
  useEffect(() => {
    async function fetchUnitData() {
      if (window.localStorage.getItem("auth") !== "true") {
        window.location.replace("/login");
      }
      try {
        const response = await axios.get(
          `https://hro2ywog4d.execute-api.ap-south-1.amazonaws.com/latest/course/${props.skill}/${props.subject}`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
            validateStatus: function (status) {
              return status >= 200 && status < 500;
            },
          }
        );
        if (response.status === 403) return (window.location.href = "/login");
        setUnits(response.data);
        setUntitsLoaded(true);
      } catch (error) {
        console.error(error);
        setUnitsLoadingText(
          "Could not fetch subjects. Please re-try or contact hello@iventorsinitiatives.com for support."
        );
      }
    }
    async function fetchVideoData() {
      try {
        const finalCode =
          props.code === "first" ? units[0].videos[0] : props.code;
        const response = await axios.get(
          `https://hro2ywog4d.execute-api.ap-south-1.amazonaws.com/latest/frontend/video?code=${finalCode}`,
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          }
        );
        setVideoItem(response.data);
        setVideoLoaded(true);
      } catch (error) {
        console.error(error);
        setVideoLoadingText(
          "Could not fetch video. Please re-try or contact hello@iventorsinitiatives.com for support."
        );
      }
    }
    !unitsLoaded && fetchUnitData();
    unitsLoaded && !videoLoaded && fetchVideoData();
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <IvaraNavbar />
      <div className="row">
        <div className="col-12 col-lg-10 videoContainer">
          <div
            className={["text-center", videoLoaded ? "d-none" : "d-block"].join(
              " "
            )}
          >
            {videoLoadingText}
          </div>
          <div className={videoLoaded ? "d-block" : "d-none"}>
            <ReactPlayer
              url={videoItem.url}
              width="100%"
              height="70%"
              controls
              config={{ file: { attributes: { controlsList: "nodownload" } } }}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
        <div className="col-12 col-lg-2">
          <div
            className={["text-center", unitsLoaded ? "d-none" : "d-block"].join(
              " "
            )}
          >
            {unitsLoadingText}
          </div>
          <div className={unitsLoaded ? "d-block" : "d-none"}>
            {units.map((element, index) => {
              return (
                <Card
                  className="my-2"
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  <Card.Title
                    onClick={() => {
                      if (currentSelected === index) {
                        return setCurrentSelected(-1);
                      }
                      setCurrentSelected(index);
                    }}
                  >
                    <span className="px-1">
                      Unit-{index + 1} {element.unit}
                    </span>
                    <span
                      className={
                        currentSelected === index ? "d-none" : "float-right"
                      }
                    >
                      <ExpandMoreOutlined />
                    </span>
                    <span
                      className={
                        currentSelected === index ? "float-right" : "d-none"
                      }
                    >
                      <ExpandLessOutlined />
                    </span>
                  </Card.Title>
                  <ListGroup
                    variant="flush"
                    className={currentSelected === index ? "d-block" : "d-none"}
                  >
                    {element.videos.map((video, i) => {
                      return (
                        <ListGroup.Item
                          key={i}
                          title={`Play Unit ${index + 1} - Video ${i + 1}`}
                          onClick={() => {
                            window.location.href = `/video/${props.skill}/${props.subject}/${video}`;
                          }}
                        >
                          Unit {index + 1} - Video {i + 1}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
