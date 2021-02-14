/*// Scroll to top
const scrolltp = document.querySelector("#scrolltp");
scrolltp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
window.addEventListener("scroll", function () {
    if (window.scrollY >= 700) {
        scrolltp.style.opacity = 1;
    } else {
        scrolltp.style.opacity = 0;
    }
});

// Theme

const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");

if (darkmode) {
    body.classList.add("dark");
    themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("dark", "active");
    } else {
        localStorage.removeItem("dark");
    }
});*/
//Scroll to top
const scrolltp=document.querySelector('#scrolltp');
scrolltp.addEventListener('click',function (){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    })
})
window.addEventListener('scroll',function(){
    if (window.scrollY>=700){
        scrolltp.style.opacity=1;
    }else{
        scrolltp.style.opacity=1;
    }
})
/*Dark Mode*/
const themeToggle=document.querySelector(".checkbox");
const body=document.querySelector("body");
const darkmode=localStorage.getItem("dark");

if (darkmode) {
    body.classList.add("dark");
    themeToggle.checked=true;
}
themeToggle.addEventListener("change",function(){
    body.classList.toggle("dark");

    if (body.classList.contains('dark')){
        localStorage.setItem("dark","active");
    }else{
        localStorage.removeItem("dark");
    }
})
function myText(qualifiedName, value) {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myText");

    if (dots.style.display === "none") {
        dots.style.display = "inline-block";
        btnText.innerHTML = "Read more";

        moreText.style.display = "none";
    } else {
        btnText.setAttribute("style", "display:inline;margin-top:15px;with:35px;");

        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline-block";

    }
}
function myBtnText() {
    var dots = document.getElementById("dot");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtnText");
    if (dots.style.display === "none") {
        dots.style.display = "inline-block";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline-block";

    }
}









