function myFunction() {
    const x = document.getElementById("mobile-navbar");
    const y = document.getElementById("hamburger-menu");
    const z = document.getElementById("close-menu");
  
    function checkWindowSize() {
      if (window.matchMedia("(max-width: 375px)").matches) {
        if (x.style.display === "block") {
          x.style.display = "none";
          y.style.display = "block";
          z.style.display = "none";
        } else {
          x.style.display = "block";
          y.style.display = "none";
          z.style.display = "block";
        }
      } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
      }
    }
  
    checkWindowSize(); // check the initial window size
  
    window.addEventListener("resize", checkWindowSize);
  }
  