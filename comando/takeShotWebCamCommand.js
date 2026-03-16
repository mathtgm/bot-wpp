import webcam from "node-webcam";

export async function takeShotWebCam() {
  const NodeWebcam = webcam;
  const opts = {
    width: 1280,
    height: 720,
    quality: 100,
    frames: 60,
    delay: 0,
    saveShots: true,
    output: "jpeg",
    device: false,
    callbackReturn: "location",
    verbose: false,
  };

  const Webcam = NodeWebcam.create(opts);
  return new Promise((resolve, reject) => {
    Webcam.capture("fotos/foto", function (err, data) {
      resolve(data);
    });
  });
}
