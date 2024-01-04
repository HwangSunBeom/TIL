import React, { useEffect, useMemo, useRef, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Webcam from "./screens/components/WebCam";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getMessaging, getToken } from "firebase/messaging";
import { BrowserRouter } from "react-router-dom";
import Header from "./screens/components/Header";
import { Footer } from "antd/es/layout/layout";
import { Button, message, notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { RadiusUprightOutlined } from "@ant-design/icons";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2bUnhfuoRy390Y2nQ4_V_HYB-Uqb8Lpk",
  authDomain: "correct-posture-challenge.firebaseapp.com",
  projectId: "correct-posture-challenge",
  storageBucket: "correct-posture-challenge.appspot.com",
  messagingSenderId: "388546468221",
  appId: "1:388546468221:web:f229317f87d362ca641414",
  measurementId: "G-WZJP6MWFZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, {
  vapidKey:
    "BGlRur5v2gIi6TCQidSwcwnvGL3AJMH-YmflCXXVqiEc9qj_8wariKQVMwLziQHMXG9t_tG83e5EyDByI",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

const Context = React.createContext({ name: "Default" });

// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mediaRecorder, setMediaRecorder] =
    useState<MediaRecorder | null>(null);
  const [isError, setIsError] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [settingPostion, setSettingPostion] = useState("");

  const [api, contextHolder] = notification.useNotification();

  const [messageApi, msgcontextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('사진이 촬영되었습니다.');
  };

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `바른 자세 챌린지`,
      description: (
        <Context.Consumer>
          {({ name }) => `${name}님 자세를 고쳐 앉으세요.`}
        </Context.Consumer>
      ),
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "순범" }), []);

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      console.log("녹화 시작");
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      console.log("녹화 종료");
      mediaRecorder.ondataavailable = function (e) {
        // 녹화된 데이터 다운로드
        const url = URL.createObjectURL(e.data);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "recording.webm";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      };
    }
  };

  const sendPushNotification = async () => {
    const messaging = getMessaging();
    const token = await getToken(messaging, {
      vapidKey:
        "BN7gMnHOuib65oN2GWVW9IfDq9LOCJyNQPVpr4kwEat4kdLEmmJqi6lyCchIVud1hrA9yZO1_Lb_nwrrpJjln3g",
    });

    if (token) {
      fetch("YOUR_SERVER_ENDPOINT", {
        // 서버 엔드포인트로 POST 요청
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          title: "warning",
          content: "자세를 고쳐 앉으세요.",
        }),
      });
    }
  };

  const handleIsError = () => {
    setIsError(!isError);
  };

  useEffect(() => {
    messageApi.info('바자챌을 시작하기 전, 올바른 자세 입력이 필요합니다.')
    // 웹캠에 접근
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) videoRef.current.srcObject = stream;

        // MediaRecorder 설정
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
      })
      .catch((err) => console.error(err));
  }, []);

  
  useEffect(() => {
    setTimeout(()=>{
      setIsError(false);
    }, 3000)
  }, [isError])
  
  useEffect(() => {
    settingPostion === 'right90' &&  setTimeout(()=>{
      setIsDone(true)
      setSettingPostion("done");
      messageApi.info('모든 사진 촬영을 완료하였습니다. 바자챌을 시작합니다.');
    }, 2000)
    settingPostion !== 'done' && settingPostion !== '' && setTimeout(()=>{info()}, 2000)
  }, [settingPostion])

  return (
    <BrowserRouter>
      <Context.Provider value={contextValue}>
        {/* {contextHolder} */}
        {msgcontextHolder}
        
        <div className="App">
          <Header isError={isError} />
          <Webcam
            videoRef={videoRef}
            isGuide={isError}
            settingPosition={settingPostion}
          />
          <div style={{ height: "14vh" }}></div>
          { !isDone &&
            <Button type="primary" onClick={()=>{}}>
              사진 촬영
            </Button>
          }
          {/* <Button danger onClick={startRecording}>
            녹화 시작
          </Button> */}
          {/* <Button type="primary" danger onClick={stopRecording}>
            녹화 중지
          </Button> */}
          
          <br />
          <br />
          <br />
          <br />
          <Button
            type="primary"
            danger
            onClick={() => {
              setSettingPostion("left90");
            }}
          >
            좌측3
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              setSettingPostion("left60");
            }}
          >
            좌측2
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              setSettingPostion("left30");
            }}
          >
            좌측1
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              setSettingPostion("main");
            }}
          >
            정면
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              setSettingPostion("right30");
            }}
          >
            우측1
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              setSettingPostion("right60");
            }}
          >
            우측2
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              setSettingPostion("right90");
            }}
          >
            우측3
          </Button>

          <br />
          <Button
            type="primary"
            danger
            onClick={() => {
              setSettingPostion("done");
            }}
          >
            끝
          </Button>
          <Button
            type="primary"
            onClick={() => {openNotification("topRight"); setIsError(true); }}
            icon={<RadiusUprightOutlined />}
          />
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
