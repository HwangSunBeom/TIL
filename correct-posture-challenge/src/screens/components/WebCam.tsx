import { getMessaging, getToken } from 'firebase/messaging';
import React, { useRef, useEffect, useState } from 'react';

const Webcam: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

  useEffect(() => {
    // 웹캠에 접근
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) videoRef.current.srcObject = stream;
        
        // MediaRecorder 설정
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
      })
      .catch(err => console.error(err));
  }, []);

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      console.log('녹화 시작');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      console.log('녹화 종료');
      mediaRecorder.ondataavailable = function(e) {
        // 녹화된 데이터 다운로드
        const url = URL.createObjectURL(e.data);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'recording.webm';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      };
    }
  };

  const sendPushNotification = async () => {
    const messaging = getMessaging();
    const token = await getToken(messaging, { vapidKey: 'BN7gMnHOuib65oN2GWVW9IfDq9LOCJyNQPVpr4kwEat4kdLEmmJqi6lyCchIVud1hrA9yZO1_Lb_nwrrpJjln3g' });

    if (token) {
      fetch('YOUR_SERVER_ENDPOINT', { // 서버 엔드포인트로 POST 요청
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          title: 'warning',
          content: '자세를 고쳐 앉으세요.'
        }),
      });
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
      <button onClick={startRecording}>녹화 시작</button>
      <button onClick={stopRecording}>녹화 중지</button>
      <button onClick={sendPushNotification}>푸시 알림 발송</button>
    </div>
  );
}

export default Webcam;