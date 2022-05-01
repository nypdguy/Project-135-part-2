objects = [];
status1 = "";


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}
function modelLoaded() {
    console.log("Model Loaded!")
    status1 = true;
  }
  function start()
  {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status : Detecting Objects";
  }  