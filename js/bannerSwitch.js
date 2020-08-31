// 该文件实现轮播图的切换


function switchImage(n) {
  var value = -n * 100 + "%"; 
  var ulBanner = document.querySelector(".banner-container .banner-img");
  ulBanner.style.marginLeft = value;

  
 
  var before = document.querySelector(".banner-title .active");
  before.className = "";
  
  var ulTitle = document.querySelector(".banner-title");
  ulTitle.children[n].className = "active";
}


var ulTitle = document.querySelector(".banner-title");
ulTitle.onmouseover = function (e) {

  var children = Array.from(ulTitle.children);
  var index = children.indexOf(e.target);
  currentIndex = index; 
  switchImage(index);
};

var timer = "";
var currentIndex = 0;
function start() {
  clearInterval(timer);
  timer = setInterval(function () {
    
    currentIndex++;
    if (currentIndex == 5) {
    
      currentIndex = 0;
    }
    switchImage(currentIndex);
  }, 3000);
}


function stop() {
  clearInterval(timer);
}

start();



var bannerContainer = document.querySelector(".banner-container");

bannerContainer.onmouseover = function () {
  stop();
};
bannerContainer.onmouseout = function () {
  start();
};
