const videoObj = document.getElementById("video");
const startbtn = document.getElementsByClassName("startbtn")[0];

async function pictureFunc() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoObj.srcObject = mediaStream;
    videoObj.onloadedmetadata = () => {
      videoObj.play();
    };
  } catch (error) {
    console.log("you got an error:", error);
  }
}

startbtn.addEventListener("click", async () => {
  // Corrected "click" event and "addEventListener" function
  startbtn.disabled = true;

  await videoObj.requestPictureInPicture(); // Corrected "videoOjb" to "videoObj"

  startbtn.disabled = false;
});

pictureFunc();
