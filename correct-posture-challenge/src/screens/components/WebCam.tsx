import { Image } from "antd";
import { getMessaging, getToken } from "firebase/messaging";
import React, { useRef, useEffect, useState } from "react";
import mainPosition from "../../assets/images/정면.jpg";
import mainPositionRemove from "../../assets/images/정면-removebg-preview.png";
import settingPositionLeft1 from "../../assets/images/좌측1-removebg-preview.png";
import settingPositionLeft2 from "../../assets/images/좌측2-removebg-preview.png";
import settingPositionLeft3 from "../../assets/images/좌측3-removebg-preview.png";
import settingPositionRight1 from "../../assets/images/우측1-removebg-preview.png";
import settingPositionRight2 from "../../assets/images/우측2-removebg-preview.png";
import settingPositionRight3 from "../../assets/images/우측3-removebg-preview.png";

interface Props {
  videoRef: React.MutableRefObject<HTMLVideoElement | null>;
  isGuide: boolean;
  settingPosition: string;
}

function Webcam(props: Props) {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh", // 화면 높이에 맞춤
        position: "relative",
      }}
    >
      <video
        ref={props.videoRef}
        autoPlay
        style={{ position: "absolute", width: "55vw", top: 50 }}
      ></video>
      {props.isGuide && (
        <img
          src={mainPositionRemove}
          alt="감자"
          style={{
            position: "absolute",
            top: 120,
            opacity: 0.4,
            zIndex: 999,
            width: "60vw",
          }}
        />
      )}
      {props.settingPosition === "left30" ? (
        <img
          src={settingPositionLeft1}
          alt="감자"
          style={{
            position: "absolute",
            top: 120,
            opacity: 0.4,
            zIndex: 999,
            width: "60vw",
          }}
        />
      ) : props.settingPosition === "left60" ? (
        <img
          src={settingPositionLeft2}
          alt="감자"
          style={{
            position: "absolute",
            top: 120,
            opacity: 0.4,
            zIndex: 999,
            width: "60vw",
          }}
        />
      ) : props.settingPosition === "left90" ? (
        <img
          src={settingPositionLeft3}
          alt="감자"
          style={{
            position: "absolute",
            top: 120,
            opacity: 0.4,
            zIndex: 999,
            width: "60vw",
          }}
        />
      ) : props.settingPosition === "right30" ? (
        <img
          src={settingPositionRight1}
          alt="감자"
          style={{
            position: "absolute",
            top: 120,
            opacity: 0.4,
            zIndex: 999,
            width: "60vw",
          }}
        />
      ) : props.settingPosition === "right60" ? (
        <img
          src={settingPositionRight2}
          alt="감자"
          style={{
            position: "absolute",
            top: 120,
            opacity: 0.4,
            zIndex: 999,
            width: "60vw",
          }}
        />
      ) : props.settingPosition === "right90" ? (
        <img
          src={settingPositionRight3}
          alt="감자"
          style={{
            position: "absolute",
            top: 120,
            opacity: 0.4,
            zIndex: 999,
            width: "60vw",
          }}
        />
      ) : props.settingPosition === "main" ? (
        <img
          src={mainPositionRemove}
          alt="감자"
          style={{
            position: "absolute",
            top: 120,
            opacity: 0.4,
            zIndex: 999,
            width: "60vw",
          }}
        />) : ''
      }
    </div>
  );
}

export default Webcam;
