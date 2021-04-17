import ReactPlayer from "react-player";
import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../HOC/LoginHOC";
import axios from "axios";
import logo from "../images/Logo.png";

//Documentation - https://www.npmjs.com/package/react-player

const logoutFunction = () => {
  window.localStorage.setItem("auth", "");
  window.localStorage.setItem("token", "");
  window.location.href = "/";
};

const VideoApp = () => {
  const videoArray = [
    "https://s3.ap-south-1.amazonaws.com/ivaraedu.com/Recording+%233+-+Siddhi+Chandak.mp4",
    "https://s3.ap-south-1.amazonaws.com/ivaraedu.com/Karan_Maths+-+karan+chotrani.mp4",
    "https://s3.ap-south-1.amazonaws.com/ivaraedu.com/shivani+maru-maths+-+Shivani+Maru.mp4",
    "https://s3.ap-south-1.amazonaws.com/ivaraedu.com/video+-+Varsha+Kadyan",
  ];
  const queryObject = new URLSearchParams(window.location.search);
  const playValue = queryObject.get("play");
  let playUrl = "";
  try {
    if (parseInt(playValue) < videoArray.length)
      playUrl = videoArray[parseInt(playValue)];
    else playUrl = videoArray[0];
  } catch (_) {
    playUrl = videoArray[0];
  }
  const { setUser, user } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      if (window.localStorage.getItem("auth") !== "true") {
        window.location.replace("/login");
      }
      try {
        const user = await axios.get(
          "https://hro2ywog4d.execute-api.ap-south-1.amazonaws.com/latest/student/profile",
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          }
        );
        setUser(user.data);
      } catch (error) {
        window.location.replace("/login");
      }
    }
    fetchData();
  });

  return (
    <div className="d-flex col">
      <div className="col-12 col-md-9">
        <p
          style={{
            display: "inline-flex",
            width: "100%",
            position: "relative",
          }}
        >
          <h3 style={{ display: "inline", position: "absolute", left: "0" }}>
            <img src={logo} width="50px" style={{ marginRight: "10px" }} />
            Hey {user.name}
          </h3>
          <h4
            style={{
              display: "inline",
              textAlign: "right",
              position: "absolute",
              right: "0",
              cursor: "pointer",
            }}
            onClick={() => {
              logoutFunction();
            }}
          >
            Logout
          </h4>
        </p>
        <ReactPlayer url={playUrl} controls width="100%" height="90vh" />
      </div>
      <div className="col-12 col-md-3" style={{ overflow: "auto" }}>
        {videoArray.map((url, index) => {
          return (
            <div
              className=""
              onClick={() => {
                window.location.href = `/content/video?play=${index}`;
              }}
            >
              <ReactPlayer url={url} width="100%" height="min-content" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoApp;
