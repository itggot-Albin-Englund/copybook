function friendsOpen() {
    document.querySelector(".friends").classList.add("animation");
    document.querySelector(".friends").classList.remove("animation2");
 }
 
 function friendsClose() {
    document.querySelector(".friends").classList.remove("animation");
    document.querySelector(".friends").classList.add("animation2");
 }