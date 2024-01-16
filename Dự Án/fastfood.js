const menuBar = document.querySelector(".menu-bar");
menuBar.addEventListener("click", function() {
    menuBar.classList.toggle("active");
    document.querySelector(".menu-items").classList.toggle("active");
});
    // const columsRight = document.querySelector("#menu");
    // columsRight.addEventListener("click", function () {
    //   columsRight.classList.toggle("active");
    //   document.querySelector(".colums").classList.toggle("active");
    // });
    