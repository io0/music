document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery img");
  const videos = document.getElementsByTagName("video");

  function highlightImage() {
    const scrollPosition = window.scrollY;
    // round
    let index = Math.round(scrollPosition / 200) - 1;

    for (var i = 0; i < videos.length; i++) {
      var video = videos[i];
      // var image = galleryImages[i];

      const imageTop = video.offsetTop;
      const imageHeight = video.offsetHeight;

      if (
        index === i
        // scrollPosition >= imageTop &&
        // scrollPosition < imageTop + imageHeight
      ) {
        // image.classList.add("active");
        video.classList.add("active-video");
        video.play();
      } else {
        // image.classList.remove("active");
        video.classList.remove("active-video");
        video.pause();
      }
    }
  }

  window.addEventListener("scroll", highlightImage);
});
