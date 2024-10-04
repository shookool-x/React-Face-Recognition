import Webcam from "react-webcam";
import { draw } from "./myFunc";
import './app.css'
import * as tf from '@tensorflow/tfjs';
import * as faceLandmarks from '@tensorflow-models/face-landmarks-detection';
import { useRef } from "react";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  async function faceMesh() {
    const net = await faceLandmarks.load(
      faceLandmarks.SupportedPackages.mediapipeFacemesh
    );

    setInterval(() => {
      detect(net);
    }, 300);
  }

  async function detect(net) {
    if (typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const { video } = webcamRef.current;

      canvasRef.current.width = video.videoWidth;
      canvasRef.current.height = video.videoHeight;
      const face = await net.estimateFaces({ input: video })
      console.log(face);

      const ctx = canvasRef.current.getContext('2d');
      draw(face, ctx);
    }
  }

  faceMesh();

  return (
    <>
      <div className="app">
        <Webcam ref={webcamRef} style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          visibility: 'hidden',
        }} />
        <canvas ref={canvasRef} style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
        }} />

      </div>
    </>
  );
}

export default App;