const pune = document.getElementById("pune");
const mumbai = document.getElementById("mumbai");
const bengaluru = document.getElementById("bengaluru");
const slider = document.getElementById("slider-main")

function transitionslider(){
  slider.style.transitionDuration = "0.5s";
    slider.style.transitionTimingFunction = "ease-in-out";
    slider.style.transitionProperty = "all";
}

pune.addEventListener("mouseover", () => {
  // No need to change the background for Pune, it's already set by default.
});

mumbai.addEventListener("mouseover", () => {
     slider.style.backgroundImage =
    "url('https://www.koltepatil.com/assets/uploads/project_city_banner/1659681756608921122.webp')";
    transitionslider()
});
mumbai.addEventListener("mouseout", () => {
  slider.style.backgroundImage =
    "url('https://www.koltepatil.com/assets/uploads/project_city_banner/1659681542568721742.webp')";
    transitionslider()
});

bengaluru.addEventListener("mouseover", () => {
  slider.style.backgroundImage =
    "url('https://www.koltepatil.com/assets/uploads/project_city_banner/1659681821958148168.webp')";
    transitionslider()
});

bengaluru.addEventListener("mouseout", () => {
  slider.style.backgroundImage =
      "url('https://www.koltepatil.com/assets/uploads/project_city_banner/1659681542568721742.webp')";
      transitionslider()
  });
 


//   change image in every 2 sec

const element = document.getElementById('slider-main');
const images = [
  'https://www.koltepatil.com/assets/uploads/project_city_banner/1659681542568721742.webp',
  'https://www.koltepatil.com/assets/uploads/project_city_banner/1659681821958148168.webp',
  'https://www.koltepatil.com/assets/uploads/project_city_banner/1659681756608921122.webp'
];

let currentIndex = 0;

function changeBackgroundImage() {
  element.style.backgroundImage = `url(${images[currentIndex]})`;
  element.style.transitionDuration = "0.5s";
  element.style.transitionTimingFunction = "ease-in-out";
  element.style.transitionProperty = "all";
  currentIndex = (currentIndex + 1) % images.length;
}

// Call the function initially
changeBackgroundImage();

// Set an interval to change the background image every 1 second (1000 milliseconds)
setInterval(changeBackgroundImage, 2000);
  
let ar = [1,5,30,6,8,5,9]

let len = c.length;
