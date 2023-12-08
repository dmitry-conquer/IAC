const videos = document.querySelectorAll(".video-wrap");

videos.forEach(video => {
  video.querySelector("video").pause()



  video.addEventListener("mouseover", e => {
    const currentVideo = e.target.closest("video");
    if (!currentVideo) {
      return;
    }
    if (currentVideo.paused) {
      currentVideo.play();
    }
  });

  video.addEventListener("mouseout", e => {
    const currentVideo = e.target.closest("video");
    if (!currentVideo) {
      return;
    }
    if (!currentVideo.paused) {
      currentVideo.pause();
    }
  });
});
