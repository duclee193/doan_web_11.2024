const sliderItem = document.querySelectorAll(".slider-item");
for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.left = index * 100 + "%";
}

const sliderItems = document.querySelector(".slider-items");
const arrowRight = document.querySelector(".ri-arrow-right-fill");
const arrowLeft = document.querySelector(".ri-arrow-left-fill");

let i = 0;
arrowRight.addEventListener("click", () => {
  
  if (i < sliderItem.length -1) {
    i++;
    sliderMove(i);
  } 
  else {
    return false;
  }
});
arrowLeft.addEventListener("click", () => {
  if (i <= 0) {
    return false;
  } 
  else {
    i--;
    sliderMove(i);
  }
});

function sliderMove(i) {
    sliderItems.style.left = -i * 100 + "%";
  }
function autoSlider() {
  if (i < sliderItem.length - 1) {
    i++;
    sliderMove(i);
  } else {
    i = 0;

  }
}

setInterval(autoSlider, 5000);

// menubar responsive
const Menubar = document.querySelector(".header-bar-icon");
const headerNav = document.querySelector(".header-nav");
Menubar.addEventListener("click", () => {
    headerNav.classList.toggle("active");
});

// sticky header

window.addEventListener("scroll", () => {
    if (scrollY > 50) {
      document.querySelector("#header").classList.add("active");
    }
      else {
        document.querySelector("#header").classList.remove("active");
      }
  });

//  điều hướng theo chuột
let lastScrollTop = 0;
const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Người dùng lướt xuống
    header.style.top = "-100px"; // Ẩn thanh điều hướng (điều chỉnh giá trị -100px theo chiều cao của thanh điều hướng)
  } else {
    // Người dùng lăn chuột lên
    header.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Đảm bảo rằng giá trị không âm
});