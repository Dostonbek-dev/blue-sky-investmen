
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


function myBtnText3() {
    var dots = document.getElementById("dot3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtnText3");
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
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var en='<section id="language">\n' +
    '<header>\n' +
    '    <nav class="navbar">\n' +
    '        <div class="theme">\n' +
    '            <input id="checkbox" type="checkbox"style="margin-left: 85px;margin-top: 4px" class="checkbox">\n' +
    '            <label for="checkbox" class="label">\n' +
    '                <div class="ball"></div>\n' +
    '            </label>\n' +
    '        </div>\n' +
    '        <a href="#" class="toggle-button" onclick="myMenu()">\n' +
    '            <span class="bar"></span>\n' +
    '            <span class="bar"></span>\n' +
    '            <span class="bar"></span>\n' +
    '        </a>\n' +
    '        <h1 class="gradient-text">BLUE SKY INVESTMENT</h1>\n' +
    '        <div class="dropdown">\n' +
    '            <button onclick="myFunction()" class="dropbtn">Language</button>\n' +
    '            <div id="myDropdown" class="dropdown-content">\n' +
    '                <a  onclick="languageEn()">Eng</a>\n' +
    '                <a  onclick="languageUz()">Uz</a>\n' +
    '                <a  onclick="languageRu()">Ru</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <ul class="nav-list" id="nav-list">\n' +
    '            <li><a href="#">Home</a></li>\n' +
    '            <li><a href="#section2">About</a></li>\n' +
    '            <li><a href="#section3">Our Work</a></li>\n' +
    '            <li><a href="#section4">Team</a></li>\n' +
    '            <li><a href="#section5">Blog</a></li>\n' +
    '\n' +
    '        </ul>\n' +
    '    </nav>\n' +
    '\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="header-content">\n' +
    '            <h1 class="header_h1">WHAT IS TRADING AND WHO IS A TRADER?</h1>\n' +
    '            <p>\n' +
    '                And so friends, as you could already understand, today we will talk about who this mysterious person is hiding behind the word trader.\n' +
    '                If you look for information on the\n' +
    '                Internet, it says that a trader is a\n' +
    '                trader who acts on his own initiative and seeks to profit directly\n' +
    '                from the trading process.</p>\n' +
    '            <p id="dots"></p>\n' +
    '            <p id="more">\n' +
    '                From my own experience, I can say that a trader is a bridge between an investor and an exchange. The goal of a trader is first of all to help the investor earn money, and only then to earn money himself.\n' +
    '                At first glance, people who are not versed in this direction may think that the profession is very easy. What\'s so hard about that they think they sit at the computer for a couple of hours pressing the buttons and the money itself flows into the pockets. I hasten to upset you as it only seems at first glance.\n' +
    '                Trading is primarily about controlling your emotions. If you are short-tempered or lack patience, you will not be successful in trading. Secondly, it is the ability to analyze the current situation in the world and on the stock exchange. You need to be able to structure a lot of information.\n' +
    '                And it\'s not for nothing that they say that trading is an intellectual sport.</p>\n' +
    '            <br>\n' +
    '            <br>\n' +
    '\n' +
    '            <a  id="myText"  class="learnmore" onclick="myText()">Learn More</a>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="hero-img">\n' +
    '            <img src="./img/about-us/undraw_Data_trends_re_2cdy.svg" width="439" height="389">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</header>\n' +
    '\n' +
    '<!--services-->\n' +
    '<section class="services" id="section1" data-aos="fade-right">\n' +
    '    <div class="container">\n' +
    '        <div class="grid-wrapper">\n' +
    '            <div class="grid-box mobileapp">\n' +
    '                <img src="./img/svg/oil.svg" alt="">\n' +
    '                <h1>Oil</h1>\n' +
    '            </div>\n' +
    '            <div class="grid-box webdesign">\n' +
    '                <img src="./img/svg/gold%20(2).png"  alt="">\n' +
    '                <h1>Gold</h1>\n' +
    '            </div>\n' +
    '            <div class="grid-box marketing">\n' +
    '                <img src="./img/svg/money-bag.svg" alt="">\n' +
    '                <h1>Dolar</h1>\n' +
    '            </div>\n' +
    '            <div class="grid-box branding">\n' +
    '                <img src="./img/resurce/dolor.png" alt="">\n' +
    '                <h1>Trading</h1>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="services-content">\n' +
    '            <div class="circle">\n' +
    '                <img src="./img/resurce/circle.svg" >\n' +
    '            </div>\n' +
    '            <h1>WHAT IS THE EXCHANGE</h1>\n' +
    '            <p>\n' +
    '                It is a marketplace where buyers and sellers meet to trade stocks, bonds, other securities, and financial instruments. This is where securities are sold and resold,\n' +
    '                their market value is formed here, work standards are developed for all market participants.</p>\n' +
    '            <p id="dot"></p>\n' +
    '            <p id="more2">The exchange operates according to certain rules, among which one should mention, first of all, government regulation. This is how you can ensure the execution of transactions and the overall reliability of the market: guarantees. True, constant monitoring, strict regulations.\n' +
    '                Due to strict adherence to the rules and control over their implementation,\n' +
    '                as well as the improvement of technologies, risks for the participants in the process are minimized.</p>\n' +
    '            <a id="myBtnText"  onclick="myBtnText()" class="ctn">Learn More</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '<section class="numbers" id="section2"  data-aos="fade-left">\n' +
    '    <div class="ocomapany">\n' +
    '        <h1 class="num-text">\n' +
    '            About company</h1>\n' +
    '        <p>\n' +
    '\n' +
    '            Dear friends and investors, We are glad to welcome you to the bluesky investment website. We would like to express our gratitude for your attention and would like to tell you a few words about our company. Bluesky investment is a world-class financial and investment consulting company. The founder and general director of our company is Nuriddinova Karina. She is a professional trader and has 7 years of experience in the Forex exchange. Despite the fact that our company was founded recently, we can confidently say that we are the market leaders and have already worked with foreign investors from all over the world.\n' +
    '            Company blue sky trades in oil, gold, precious metals and\n' +
    '            currency pairs.\n' +
    '\n' +
    '        </p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="container">\n' +
    '        <div class="grid-wrapper">\n' +
    '            <div class="grid-box hpyclients">\n' +
    '                <h1>2500+</h1>\n' +
    '                <h2>Happy Clients</h2>\n' +
    '            </div>\n' +
    '            <div class="grid-box prjcompleted">\n' +
    '                <h1>750+</h1>\n' +
    '                <h2>Projects Completed</h2>\n' +
    '            </div>\n' +
    '            <div class="grid-box runningprj">\n' +
    '                <h1>200+</h1>\n' +
    '                <h2>Running Projects</h2>\n' +
    '            </div>\n' +
    '            <div class="grid-box designs">\n' +
    '                <h1>7+</h1>\n' +
    '                <h2>\n' +
    '                    Year experience </h2>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="mockup-img">\n' +
    '            <img class="mockup_image" src="img/about-us/karina.jpg"/></div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '\n' +
    '<!-- projects-->\n' +
    '\n' +
    '<section class="projects" id="section3"  data-aos="zoom-in">\n' +
    '    <h1>Our workspace</h1>\n' +
    '    <div class="project-images">\n' +
    '        <div class="prj-img">\n' +
    '            <img src="./img/bluesky/jahon.jpg" alt="">\n' +
    '            <div class="details">\n' +
    '                <h2>Invest In </h2>\n' +
    '                <h1>Trading</h1>\n' +
    '                <i class="fa fa-arrow-circle-right"></i>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="prj-img">\n' +
    '            <img src="./img/bluesky/karinaandjahon.jpg" alt="">\n' +
    '            <div class="details">\n' +
    '                <h2>Invest In </h2>\n' +
    '                <h1>Trading</h1>\n' +
    '                <i class="fa fa-arrow-circle-right"></i>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="prj-img">\n' +
    '            <img src="./img/bluesky/karinaAndCofe.jpg" alt="">\n' +
    '            <div class="details">\n' +
    '                <h2>Invest In </h2>\n' +
    '                <h1>Trading</h1>\n' +
    '                <i class="fa fa-arrow-circle-right"></i>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '</section>\n' +
    '<section  class="numbers"  >\n' +
    '    <div class="who">\n' +
    '        <h1 class="num-text">\n' +
    '            WHO IS A TRADER AND WHAT DOES HE DO?</h1>\n' +
    '        <p>\n' +
    '\n' +
    '            A lot of such questions are asked to us and our team “Who is a trader? What does he do ”, and today we decided to share our view on this mysterious word.\n' +
    '            A trader in translation from English is a trader in the broadest sense of the word. The profession of a trader is very specific and does not require a diploma in economics. Anyone can become a trader, but desire alone is not enough to be successful. You must have a special predisposition and constantly improve. You are competing with the best of the best,\n' +
    '            and the only indicator of a trader\'s performance is the exchange yield.\n' +
    '            Those unfamiliar with the specifics of working in the financial market believe that a trader earns fabulous money in the shortest possible time. That one has only to learn to "read stock charts", master simple trading techniques, read a couple of books about trading, and a couple of million in your pocket!\n' +
    '\n' +
    '            In fact, this is a delusion that has nothing to do with reality. A trader can take losses for half a year, and then cover all the failures with a series of brilliant trades.\n' +
    '        </p>\n' +
    '\n' +
    '    </div>\n' +
    '</section>\n' +
    '<!--team-->\n' +
    '<section class="team" id="section4"  data-aos="flip-left">\n' +
    '    <h1 class="team-h1" >Meet our Team</h1>\n' +
    '    <div class="grid-wrapper">\n' +
    '        <div class="team-mem">\n' +
    '            <img src="./img/bluesky/karinaProfile.jpg" alt="">\n' +
    '            <h1>Karina Nuriddinova</h1>\n' +
    '            <h2>CEO & Founder</h2>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="team-mem">\n' +
    '            <img src="./img/bluesky/UmarjonProfile.jpg" alt="">\n' +
    '            <h1>Umarjon</h1>\n' +
    '            <h2>Manager</h2>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="team-mem">\n' +
    '            <img src="./img/bluesky/ustozProfil.jpg" alt="">\n' +
    '            <h1>Robert</h1>\n' +
    '            <h2>Product Designer</h2>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '<section class="blogs" id="section5"  data-aos="zoom-in-up">\n' +
    '    <h1 class="blog-h1">Our Latest Blogs</h1>\n' +
    '    <div class="grid-wrapper">\n' +
    '        <div class="blog">\n' +
    '            <img src="./img/about-us/munisa-and-karina.jpg" alt="">\n' +
    '            <h1>HOW TO START EARNING WITH US?</h1>\n' +
    '            <p>Friends, today our guest was a wonderful singer Munisa Rizaeva.\n' +
    '                We consulted her on issues of interest. We hope you have learned a lot for yourself. We look forward to welcoming you again.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">18.02.2021</span>\n' +
    '                </p>\n' +
    '            <br>\n' +
    '\n' +
    '            <br>\n' +
    '            <a >Read More</a>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="blog">\n' +
    '            <img src="./img/resurce/blog2.png" alt="">\n' +
    '            <h1>TIPS FOR BEGINNING TRADERS</h1>\n' +
    '            <p>Friends, today my team and I decided to share a couple of tips for novice traders.\n' +
    '                Attraction of the amount that you are ready to lose.\n' +
    '                In the forex market, there is such an unspoken pattern that a novice trader always loses\n' +
    '                (in the trader\'s slang - “drains”) his first deposit. This is due to the fact that a beginner\n' +
    '                in trading financial instruments does not yet have all the necessary trading skills and\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">18.02.2021</span>\n' +
    '            <p id="dot3"></p>\n' +
    '            <p id="more3">\n' +
    '                trading psychology. Some forex brokers offer their clients to open a so-called cent account, which will allow them to start trading with real money with an amount of $ 1-10.\n' +
    '                Self-control and trading psychology.\n' +
    '                Professional traders know what the psychology of a trader is. Newcomers to the forex market should learn to control their emotions, fight fear and be more decisive. However, at the same time, you should be careful and act according to the established rules, and sometimes you just need to wait.\n' +
    '                Demo account\n' +
    '                Every professional trader started his trading path by trading on a demo account. Demo account - a virtual account that is provided by a broker for training on testing the trading system. Thanks to the demo account, a novice trader can acquire practical skills in trading in financial markets without the risk of losing real money.\n' +
    '                Professional traders advice: study on a demo account until your trading strategy starts to bring a stable profit.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">18.02.2021</span>\n' +
    '            </p>\n' +
    '            <br>\n' +
    '            <br>\n' +
    '            <a  id="myBtnText3" style="cursor:pointer;"  onclick="myBtnText3()" >Learn More</a>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="blog">\n' +
    '            <img src="./img/about-us/austin-distel-DfjJMVhwH_8-unsplash.jpg" alt="">\n' +
    '            <h1>\n' +
    '                A FEW WORDS ABOUT OUR FOUNDER</h1>\n' +
    '            <p>And so friends today we wanted to tell a little about our founder.\n' +
    '\n' +
    '                Nuriddinova Karina is the director and founder of the Bluesky company.\n' +
    '                She has more than 7 years of professional trading in the international\n' +
    '                market behind her. She has experience of working with investors in more\n' +
    '                than 15 countries, more than 100 successful projects. Under her leadership,\n' +
    '                we have managed to achieve high performance for our investors.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">18.02.2021</span>\n' +
    '            </p>\n' +
    '                <br>\n' +
    '\n' +
    '                <br>\n' +
    '                <a >Read More</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '    <section class="map">\n' +
    '        <div class="mapouter"><div class="gmap_canvas"><iframe width="1520" height="426" id="gmap_canvas" src="https://maps.google.com/maps?q=Tashkent%20,%20Uzbekistan%20Yunusabad%20district%20Osiyo,%2039&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org">fmovies</a><br><style>.mapouter{position:relative;text-align:right;height:426px;width:1520px;}</style>\n' +
    '            <a href="https://www.embedgooglemap.net">\n' +
    '            </a>\n' +
    '            <style>.gmap_canvas {overflow:hidden;background:none!important;height:426px;width:1520px;}</style></div></div>\n' +
    '    </section>\n' +
    '<section class="footer">\n' +
    '    <div class="grid-wrapper">\n' +
    '        <div class="col-4 footer1">\n' +
    '            <h1>Blue Sky Investment</h1>\n' +
    '            <p>Better ideas, better investments, more profits.\n' +
    '                This is a better relationship of success </p>\n' +
    '            <div class="soceal-profils">\n' +
    '                <a href="https://www.youtube.com/channel/UCqtfzERelXeRcQlknqHFQ0Q?guided_help_flow=5" target="_blank">  <i class=  "fa fa-youtube"></i></a>\n' +
    '                <a href="https://instagram.com/bluesky.uz?igshid=1s8ub10jaz1m3" target="_blank"><i class="fa fa-instagram"></i></a>\n' +
    '                <a href="https://www.facebook.com/Blueskyuz-100693928728221" target="_blank"><i class="fa fa-facebook"></i></a>\n' +
    '                <a href="https://t.me/blueskyinvestment" target="_blank"><i class="fa fa-telegram" ></i></a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-4 footer2">\n' +
    '            <h1> Contact info</h1>\n' +
    '            <h4>Tashkent , Uzbekistan</h4>\n' +
    '            <h4>Yunusabad district </h4>\n' +
    '            <h4>Osiyo, 39 </h4>\n' +
    '            <h4>+998955142727</h4>\n' +
    '            <h4>08:00-20:00</h4>\n' +
    '            <a href="blueSkyInvestment@gamil.com"><h4>blueSkyInvestment@gamil.com</h4></a>\n' +
    '            <a href=""><h4></h4></a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '<i id="scrolltp" class="fa fa-arrow-up"></i>\n' +
    '</section>\n' +
    '</section>'

var uz='<section id="language">\n' +
    '<header>\n' +
    '    <nav class="navbar">\n' +
    '        <div class="theme"  style="margin-left: 85px;margin-top: 4px">\n' +
    '            <input id="checkbox" type="checkbox"style="margin-left: 85px;margin-top: 4px" class="checkbox">\n' +
    '            <label for="checkbox" class="label">\n' +
    '                <div class="ball"></div>\n' +
    '            </label>\n' +
    '        </div>\n' +
    '        <a href="#" class="toggle-button" onclick="myMenu()">\n' +
    '            <span class="bar"></span>\n' +
    '            <span class="bar"></span>\n' +
    '            <span class="bar"></span>\n' +
    '        </a>\n' +
    '        <h1 class="gradient-text">BLUE SKY INVESTMENT</h1>\n' +
    '        <div class="dropdown">\n' +
    '            <button onclick="myFunction()" class="dropbtn">Til</button>\n' +
    '            <div id="myDropdown" class="dropdown-content">\n' +
    '                <a href="#home" onclick="languageEn()">Eng</a>\n' +
    '                <a href="#about" onclick="languageUz()">Uz</a>\n' +
    '                <a href="#contact" onclick="languageRu()">Ru</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <ul class="nav-list" id="nav-list">\n' +
    '            <li><a href="#">Asosiy</a></li>\n' +
    '            <li><a href="#section2">Kompaniya haqida</a></li>\n' +
    '            <li><a href="#section3">Xizmatlar</a></li>\n' +
    '            <li><a href="#section4">Bizning jamoa</a></li>\n' +
    '            <li><a href="#section5">Blog</a></li>\n' +
    '\n' +
    '        </ul>\n' +
    '    </nav>\n' +
    '\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="header-content">\n' +
    '            <h1 class="header_h1">TREYDING NIMA VA TREYDER KIM?</h1>\n' +
    '            <p>\n' +
    '                Va aziz do\'stlar, tushunganingizdek, bugun biz trader so\'zining orqasida qanday sizrli shaxs turganligi haqida suhbatlashamiz. Agar siz Internetdan ma\'lumot qidirsangiz, unda treyder - bu o\'z tashabbusi bilan harakat qiladigan va to\'g\'ridan-to\'g\'ri onlayn savdo jarayonidan foyda olishga intiladigan shaxs degan so\'zlarni topishingiz mumkin.</p>\n' +
    '            <p id="dots"></p>\n' +
    '            <p id="more">\n' +
    '                O\'z tajribamdan shuni aytishim mumkinki, treyder bu - investor va birja o\'rtasidagi ko\'prikdir. Treyderning maqsadi birinchi navbatda investorning pul ishlashiga yordamlashish, va undan keyin o\'zi uchun pul ishlash. Bir qarashda, bu sohaga chuqur qiziqmagan kishi uchun bu kasb juda oson tuyulishi mumkin. Ularning o\'ylashicha treyder bir necha soat kompyuter qarshisida tugmalarni bosadi va pulning o\'zi cho\'ntakka oqib keladi. Men bu faqatgina birinchi taassurot deyishga majburman. Treyding bu eng asosiysi his-tuyg\'ularni jilovlashdir. Agar siz sabrsizroq va tezfe\'l bo\'lsangiz, siz treydingda muvaffaqiyatga erisha olmaysiz. Ikkinchidan, bu dunyodagi va birjadagi ayni vaziyatni tahlil qilish demakdir. Siz bir qancha ma\'lumotlarni analiz qilishingizga to\'g\'ri keladi. Treding bu intellektual sport degan gap esa shunchaki asossizdir.</p>\n' +
    '            <br>\n' +
    '            <br>\n' +
    '\n' +
    '            <a  id="myText"  class="learnmore" onclick="myText()">Ko\'proq</a>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="hero-img">\n' +
    '            <img src="./img/about-us/undraw_Data_trends_re_2cdy.svg" width="439" height="389">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</header>\n' +
    '\n' +
    '<!--services-->\n' +
    '<section class="services" id="section1" data-aos="fade-right">\n' +
    '    <div class="container">\n' +
    '        <div class="grid-wrapper">\n' +
    '            <div class="grid-box mobileapp">\n' +
    '                <img src="./img/svg/oil.svg" alt="">\n' +
    '                <h1>Neft</h1>\n' +
    '            </div>\n' +
    '            <div class="grid-box webdesign">\n' +
    '                <img src="./img/svg/gold%20(2).png"  alt="">\n' +
    '                <h1>Oltin</h1>\n' +
    '            </div>\n' +
    '            <div class="grid-box marketing">\n' +
    '                <img src="./img/svg/money-bag.svg" alt="">\n' +
    '                <h1>Dollar</h1>\n' +
    '            </div>\n' +
    '            <div class="grid-box branding">\n' +
    '                <img src="./img/resurce/dolor.png" alt="">\n' +
    '                <h1>Treyding</h1>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="services-content">\n' +
    '            <div class="circle">\n' +
    '                <img src="./img/resurce/circle.svg" >\n' +
    '            </div>\n' +
    '            <h1>BIRJA NIMA</h1>\n' +
    '            <p>\n' +
    '                Birja bu xaridorlar va sotuvchilar aktsiyalar, obligatsiyalar, boshqa qimmatli qog\'ozlar va moliyaviy vositalar bilan savdo qilish uchun uchrashadigan bozor. Birjada ular qimmatli qog\'ozlarni sotadilar va qayta sotib oladilar. Bu yerda ularning bozor qiymati shakllanadi. Bozorning barcha ishtirokchilari uchun ish standartlari ishlab chiqiladi.</p>\n' +
    '            <p id="dot"></p>\n' +
    '            <p id="more2">Birja ma\'lum qoidalarga muvofiq ishlaydi. Avvalambor, ular orasida davlat tomonidan tartibga solinishini eslatib o\'tish lozim. Shunday qilib siz bitimlarning bajarilishini va bozorning umumiy ishonchliligini ta\'minlay olasiz va kafolatlaysiz. To\'g\'ri, doimiy monitoring, qat\'iy qoidalar, qoidalarga qat\'iy rioya qilish va ularning bajarilishini nazorat qilish, shuningdek texnologiyalarni takomillashtirish tufayli jarayon ishtirokchilari uchun xatarlar minimallashtiriladi.</p>\n' +
    '            <a id="myBtnText"  onclick="myBtnText()" class="ctn">Ko\'proq</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '<section class="numbers" id="section2"  data-aos="fade-left">\n' +
    '    <!--    <div class="who">-->\n' +
    '    <!--   <h1 class="num-text">-->\n' +
    '    <!--       WHO IS A TRADER AND WHAT DOES HE DO?</h1>-->\n' +
    '    <!--    <p>-->\n' +
    '\n' +
    '    <!--        A lot of such questions are asked to us and our team “Who is a trader? What does he do ”, and today we decided to share our view on this mysterious word.-->\n' +
    '    <!--        A trader in translation from English is a trader in the broadest sense of the word. The profession of a trader is very specific and does not require a diploma in economics. Anyone can become a trader, but desire alone is not enough to be successful. You must have a special predisposition and constantly improve. You are competing with the best of the best,-->\n' +
    '    <!--        and the only indicator of a trader\'s performance is the exchange yield.-->\n' +
    '    <!--        Those unfamiliar with the specifics of working in the financial market believe that a trader earns fabulous money in the shortest possible time. That one has only to learn to "read stock charts", master simple trading techniques, read a couple of books about trading, and a couple of million in your pocket!-->\n' +
    '\n' +
    '    <!--        In fact, this is a delusion that has nothing to do with reality. A trader can take losses for half a year, and then cover all the failures with a series of brilliant trades.-->\n' +
    '    <!--    </p>-->\n' +
    '\n' +
    '    <!--    </div>-->\n' +
    '    <div class="ocomapany">\n' +
    '        <h1 class="num-text">\n' +
    '            Kompaniya haqida</h1>\n' +
    '        <p>\n' +
    '\n' +
    '            Aziz do\'stlar va investorlar, biz sizni Blueskyinvestment veb-saytida kutib olishdan mamnunmiz, e\'tiboringiz uchun o\'z minnatdorchiligimizni bildiramiz va kompaniyamiz haqida bir necha so\'z aytmoqchimiz. Blueskyinvestment - bu jahon miqyosidagi moliyaviy va investitsiya bo\'yicha konsalting kompaniyasi. Kompaniyamiz asoschisi va bosh direktori Karina Nuriddinova. U professional treyder va Forex birjasida 7 yillik tajribaga ega. Kompaniyamiz yaqinda tashkil etilganiga qaramay, biz bozorda etakchimiz va 15 mamlakatdan kelgan xorijiy investorlar bilan allaqachon ishlaganmiz deb, ishonch bilan aytishimiz mumkin.Blue Sky kompaniyasi asosan neft, oltin, qimmatbaho metallar va valyuta juftliklari bilan savdolarni amalga oshiradi.\n' +
    '        </p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="container">\n' +
    '        <div class="grid-wrapper">\n' +
    '            <div class="grid-box hpyclients">\n' +
    '                <h1>2500+</h1>\n' +
    '                <h2>Minnatdor mijozlar</h2>\n' +
    '            </div>\n' +
    '            <div class="grid-box prjcompleted">\n' +
    '                <h1>750+</h1>\n' +
    '                <h2>Tugallangan proyektlar</h2>\n' +
    '            </div>\n' +
    '            <div class="grid-box runningprj">\n' +
    '                <h1>200+</h1>\n' +
    '                <h2>Faol proyektlar</h2>\n' +
    '            </div>\n' +
    '            <div class="grid-box designs">\n' +
    '                <h1>7+</h1>\n' +
    '                <h2>\n' +
    '                    Yıllık tajriba </h2>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="mockup-img">\n' +
    '            <img class="mockup_image" src="img/about-us/karina.jpg"/></div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '\n' +
    '<!-- projects-->\n' +
    '\n' +
    '<section class="projects" id="section3"  data-aos="zoom-in">\n' +
    '    <h1>Bizning ish jarayonimiz</h1>\n' +
    '    <div class="project-images">\n' +
    '        <div class="prj-img">\n' +
    '            <img src="./img/bluesky/jahon.jpg" alt="">\n' +
    '            <div class="details">\n' +
    '                <h2>Treydingga</h2>\n' +
    '                <h1>Invistitsiya kirit</h1>\n' +
    '                <i class="fa fa-arrow-circle-right"></i>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="prj-img">\n' +
    '            <img src="./img/bluesky/karinaandjahon.jpg" alt="">\n' +
    '            <div class="details">\n' +
    '                <h2>Treydingga</h2>\n' +
    '                <h1>Invistitsiya kirit</h1>\n' +
    '                <i class="fa fa-arrow-circle-right"></i>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="prj-img">\n' +
    '            <img src="./img/bluesky/karinaAndCofe.jpg" alt="">\n' +
    '            <div class="details">\n' +
    '                <h2>Treydingga</h2>\n' +
    '                <h1>Invistitsiya kirit</h1>\n' +
    '                <i class="fa fa-arrow-circle-right"></i>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '</section>\n' +
    '<section  class="numbers"  >\n' +
    '    <div class="who">\n' +
    '        <h1 class="num-text">\n' +
    '            TREYDER KIM VA U NIMA ISH QILADI?</h1>\n' +
    '        <p>\n' +
    '\n' +
    '            Bizdan ko\'pincha "Treyder kim va u nima ish qiladi?" deb so\'rashadi, va bugun biz bu sirli so\'z haqida fikrlarimiz bilan bo\'lishmoqchimiz. Treyderlik kasbi judayam qiziqarli soha va treyder bo\'lish uchun iqtisodiyot yo\'nalishidagi diplom shart emas. Har qanday kishi treyder bo\'la oladi, lekin xohishning o\'zi omadli bo\'lish uchun yetarli emas. Sizda o\'zgacha o\'ylash qobiliyati bo\'lishi kerak va muntazam ravishda rivojlanib borishingiz kerak. Siz eng zo\'rlarning zo\'rlari bilan raqobatda bo\'lasiz va sizning yagona baholanadigan joyingiz bu birja maydonidir. Birjadan xabari yo\'q kishilar treyder qisqa vaqt ichida katta miqdorda pul ishlaydi deb ishonishadi. Aslida esa treyder oddiy treyding texnikalarini mukammal o\'rganishi, bir qancha treyding haqidagi kitoblarni o\'qishi va cho\'ntagida bir necha million bo\'lishi kerak! Treyder yarim yil davomida pul yo\'qotishi mumkin, va barcha muvaffaqiyatsizliklarni ajoyib savdolar orqali qoplashi mumkin.</p>\n' +
    '\n' +
    '    </div>\n' +
    '</section>\n' +
    '<!--team-->\n' +
    '<section class="team" id="section4"  data-aos="flip-left">\n' +
    '    <h1 class="team-h1" >Bizning jamoa</h1>\n' +
    '    <div class="grid-wrapper">\n' +
    '        <div class="team-mem">\n' +
    '            <img src="./img/bluesky/karinaProfile.jpg" alt="">\n' +
    '            <h1>Karina Nuriddinova</h1>\n' +
    '            <h2>CEO</h2>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="team-mem">\n' +
    '            <img src="./img/bluesky/UmarjonProfile.jpg" alt="">\n' +
    '            <h1>Umarjon</h1>\n' +
    '            <h2>Menejer</h2>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="team-mem">\n' +
    '            <img src="./img/bluesky/ustozProfil.jpg" alt="">\n' +
    '            <h1>Toshtemirov Feruzbek</h1>\n' +
    '            <h2>Guruh yetakchisi</h2>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '<section class="blogs" id="section5"  data-aos="zoom-in-up">\n' +
    '    <h1 class="blog-h1">Qaynoq bloglarimiz</h1>\n' +
    '    <div class="grid-wrapper">\n' +
    '        <div class="blog">\n' +
    '            <img src="./img/about-us/munisa-and-karina.jpg" alt="">\n' +
    '            <h1>BIZDA MAFTUNKOR MEHMON - MUNISA</h1>\n' +
    '            <p>Do\'stlar, bugun 25 fevral kuni bizning mehmonimiz ajoyib xonanda Munisa Rizayeva. Biz u kishiga birja haqida ma\'lumotlar berdik. Biz ko\'p narsa o\'rgandingiz deb umid qilamiz. Biz sizni yana ofisimizda kutib qolamiz.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">25.02.2021</span>\n' +
    '                </p>\n' +
    '            <br>\n' +
    '\n' +
    '            <br>\n' +
    '            <a >Ko\'proq</a>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="blog">\n' +
    '            <img src="./img/resurce/blog2.png" alt="">\n' +
    '            <h1>ENDI TREYDERLIKKA QADAM QO\'YAYOTGANLAR UCHUN MASLAHATLAR</h1>\n' +
    '            <p>Do\'stlar, bugun mening jamoam va men boshlang\'ich savdogarlar uchun bir nechta maslahatlarni baham ko\'rishga qaror qildik. Yo\'qotishga tayyor bo\'lgan miqdorni jalb qilish. Forex bozorida aytilmagan bunday muntazamlik mavjudki, yangi boshlagan treyder har doim o\'zining birinchi depozitini yo\'qotadi (treyderning jargonida - "drenajlaydi"). Buning sababi shundaki, moliyaviy vositalarni sotishda yangi boshlovchi hali barcha kerakli savdo ko\'nikmalariga va savdo psixologiyasiga ega emas. Ba\'zi bir Forex brokerlari o\'z mijozlariga sent deb nomlangan hisob raqamini ochishni taklif qilmoqdalar, bu ularga 1-10 dollar miqdorida real pul bilan savdoni boshlashga imkon beradi.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">18.02.2021</span>\n' +
    '            <p id="dot3"></p>\n' +
    '            <p id="more3">\n' +
    '                O\'z-o\'zini boshqarish va savdo psixologiyasi. Professional treyderlar treyderning psixologiyasi nima ekanligini bilishadi. Forex bozoriga yangi kelganlar o\'zlarining his-tuyg\'ularini boshqarishni, qo\'rquvga qarshi kurashishni va qat\'iyatliroq bo\'lishni o\'rganishlari kerak. Biroq, shu bilan birga, siz ehtiyot bo\'lishingiz va belgilangan qoidalarga muvofiq harakat qilishingiz kerak, ba\'zan esa kutishingiz kerak bo\'ladi. Demo hisob qaydnomasi Har bir professional treyder o\'zining savdo yo\'lini demo hisobvarag\'ida savdo qilishdan boshladi. Demo hisob - bu savdo tizimini sinovdan o\'tkazish bo\'yicha trening uchun broker tomonidan taqdim etiladigan virtual hisob qaydnomasi. Demo-hisob tufayli yangi boshlagan treyder moliyaviy pullarni real pul yo\'qotish xavfisiz savdo-sotiqda amaliy ko\'nikmalarga ega bo\'lishi mumkin. Professional treyderlar maslahati: savdo strategiyangiz barqaror foyda keltira boshlaguncha demo hisobvarag\'ida o\'qing. Kichik tranzaksiya hajmi. Birinchi bandda aytib o\'tilganidek, siz kichkina boshlashingiz kerak. Professional treyderlar bir vaqtning o\'zida yuqori hajmlarga o\'tishdan oldin minimal savdo maydonchalari bilan savdo qilishni boshlashdi. Bu ikki omilga bog\'liq: Kichik bitim hajmi sizga eng kam investitsiya miqdori bilan savdo qilishni boshlashga imkon beradi, moliya bozorlarida savdo-sotiq hamma uchun ochiq bo\'ladi; Kichik savdo partiyasi savdo xatarlarini minimallashtiradi, bu sizga katta miqdordagi yo\'qotish xavfini tug\'dirmasdan, real mablag\'lar bilan qanday savdo qilishni o\'rganishga imkon beradi. Ajam treyderlar uchun maslahat: agar siz haqiqiy hisobvaraqda savdoga o\'tsangiz, u holda 0.01 lot bozoriga yoki broker tomonidan taqdim etilgan eng kichik ruxsat etilgan hajmga kiring.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">18.02.2021</span>\n' +
    '            </p>\n' +
    '            <br>\n' +
    '            <br>\n' +
    '            <a  id="myBtnText3" style="cursor:pointer;"  onclick="myBtnText3()" >Ko\'proq</a>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="blog">\n' +
    '            <img src="./img/about-us/austin-distel-DfjJMVhwH_8-unsplash.jpg" alt="">\n' +
    '            <h1>\n' +
    '                BIZNING ASOSCHIMIZ HAQIDA BIR NECHA SO\'Z</h1>\n' +
    '            <p>Shundek qilib do\'stlar, bugun biz asoschimiz haqida bir oz gapirib bermoqchi edik. Nuriddinova Karina - Bluesky kompaniyasining direktori va asoschisi. Uning orqasida xalqaro bozorda 7 yildan ortiq professional savdo bor. U 15 dan ortiq mamlakatda investorlar bilan ishlash tajribasiga, 100 dan ortiq muvaffaqiyatli loyihalarga ega. Uning rahbarligi ostida biz sarmoyadorlarimiz uchun yuqori ko\'rsatkichlarga erishdik.\n' +
    '\n' +
    '                "Kompaniyamizning asosiy maqsadi odamlarni pulini ko\'paytirishiga yordam berishdir", deydi Karina Nuriddinova.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">18.02.2021</span>\n' +
    '            </p>\n' +
    '                <br>\n' +
    '\n' +
    '                <br>\n' +
    '                <a >Ko\'proq</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '    <section class="map">\n' +
    '        <div class="mapouter"><div class="gmap_canvas"><iframe width="1520" height="426" id="gmap_canvas" src="https://maps.google.com/maps?q=Tashkent%20,%20Uzbekistan%20Yunusabad%20district%20Osiyo,%2039&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org">fmovies</a><br><style>.mapouter{position:relative;text-align:right;height:426px;width:1520px;}</style>\n' +
    '            <a href="https://www.embedgooglemap.net">\n' +
    '            </a>\n' +
    '            <style>.gmap_canvas {overflow:hidden;background:none!important;height:426px;width:1520px;}</style></div></div>\n' +
    '    </section>\n' +
    '<section class="footer">\n' +
    '    <div class="grid-wrapper">\n' +
    '        <div class="col-4 footer1">\n' +
    '            <h1>Blue Sky Investment</h1>\n' +
    '            <p>Лучшие идеи, лучшие инвестиции, больше прибыли.\n' +
    '                Это лучшие отношения успеха. </p>\n' +
    '            <div class="soceal-profils">\n' +
    '                <a href="https://www.youtube.com/channel/UCqtfzERelXeRcQlknqHFQ0Q?guided_help_flow=5" target="_blank">  <i class=  "fa fa-youtube"></i></a>\n' +
    '                <a href="https://instagram.com/bluesky.uz?igshid=1s8ub10jaz1m3" target="_blank"><i class="fa fa-instagram"></i></a>\n' +
    '                <a href="https://www.facebook.com/Blueskyuz-100693928728221" target="_blank"><i class="fa fa-facebook"></i></a>\n' +
    '                <a href="https://t.me/blueskyinvestment" target="_blank"><i class="fa fa-telegram" ></i></a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-4 footer2">\n' +
    '            <h1> Biz bilan aloqa</h1>\n' +
    '            <h4>Toshkent , O\'zbekiston</h4>\n' +
    '            <h4>Yunusabad dahasi </h4>\n' +
    '            <h4>Osiyo ko\'chasi, 39 </h4>\n' +
    '            <h4>+998955142727</h4>\n' +
    '            <h4>08:00-20:00</h4>\n' +
    '            <a href="blueSkyInvestment@gamil.com"><h4>blueSkyInvestment@gamil.com</h4></a>\n' +
    '            <a href=""><h4></h4></a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '<i id="scrolltp" class="fa fa-arrow-up"></i>\n' +
    '</section>'
var ru='<section id="language">\n' +
    '<header>\n' +
    '    <nav class="navbar">\n' +
    '        <div class="theme"  style="margin-left: 85px;margin-top: 4px">\n' +
    '            <input id="checkbox" type="checkbox" class="checkbox">\n' +
    '            <label for="checkbox" class="label">\n' +
    '                <div class="ball"></div>\n' +
    '            </label>\n' +
    '        </div>\n' +
    '        <a href="#" class="toggle-button" onclick="myMenu()">\n' +
    '            <span class="bar"></span>\n' +
    '            <span class="bar"></span>\n' +
    '            <span class="bar"></span>\n' +
    '        </a>\n' +
    '        <h1 class="gradient-text">BLUE SKY INVESTMENT</h1>\n' +
    '        <div class="dropdown">\n' +
    '            <button onclick="myFunction()" class="dropbtn">Язык</button>\n' +
    '            <div id="myDropdown" class="dropdown-content">\n' +
    '                <a href="#home" onclick="languageEn()">Eng</a>\n' +
    '                <a href="#about" onclick="languageUz()">Uz</a>\n' +
    '                <a href="#contact" onclick="languageRu()">Ru</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <ul class="nav-list" id="nav-list">\n' +
    '            <li><a href="#">Домой</a></li>\n' +
    '            <li><a href="#section2">О нас</a></li>\n' +
    '            <li><a href="#section3">Наша работа</a></li>\n' +
    '            <li><a href="#section4">Команда</a></li>\n' +
    '            <li><a href="#section5">Блог</a></li>\n' +
    '\n' +
    '        </ul>\n' +
    '    </nav>\n' +
    '\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="header-content">\n' +
    '            <h1 class="header_h1">ЧТО ТАКОЕ ТРЕЙДИНГ И КТО ТАКОЙ ТРЕЙДЕР?</h1>\n' +
    '            <p>\n' +
    '                И так друзья как вы уже могли понять сегодня речь пойдет о том кто же это такой таинственный человек скрывается за словом трейдер.\n' +
    '                Если поискать информацию в интернете там говорится что трейдер это торговец, действующий по собственной инициативе и стремящийся извлечь прибыль непосредственно из процесса торговли.\n' +
    '            </p>\n' +
    '            <p id="dots"></p>\n' +
    '            <p id="more">\n' +
    '                По своему опыту могу сказать что трейдер это мостик между инвестором и биржей. Цель трейдера в первую очередь помочь заработать инвестору, а уже потом заработать и самому.\n' +
    '\n' +
    '                Людям не разбирающимся в этом направлении на первый взгляд может показаться что профессия очень легкая. Да что тут сложного думают они сидишь за компьютером пару часов нажимая кнопочки и деньги сами текут в карманы. Спешу вас огорчить так только кажется на первый взгляд.\n' +
    '                Трейдинг в первую очередь это контроль над своими эмоциями. Если вы вспыльчивый или же у вас нет терпения, успеха в трейдинге вы не добьетесь. Во вторых это умение анализировать текущую ситуацию в мире и на бирже. Нужно уметь структурировать очень много информации. И не зря говорят что трейдинг это интеллектуальный спорт.</p>\n' +
    '            <br>\n' +
    '            <br>\n' +
    '\n' +
    '            <a  id="myText"  class="learnmore" onclick="myText()">Ещё</a>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="hero-img">\n' +
    '            <img src="./img/about-us/undraw_Data_trends_re_2cdy.svg" width="439" height="389">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</header>\n' +
    '\n' +
    '<!--services-->\n' +
    '<section class="services" id="section1" data-aos="fade-right">\n' +
    '    <div class="container">\n' +
    '        <div class="grid-wrapper">\n' +
    '            <div class="grid-box mobileapp">\n' +
    '                <img src="./img/svg/oil.svg" alt="">\n' +
    '                <h1>Нефть</h1>\n' +
    '            </div>\n' +
    '            <div class="grid-box webdesign">\n' +
    '                <img src="./img/svg/gold%20(2).png"  alt="">\n' +
    '                <h1>Золото</h1>\n' +
    '            </div>\n' +
    '            <div class="grid-box marketing">\n' +
    '                <img src="./img/svg/money-bag.svg" alt="">\n' +
    '                <h1>Доллар</h1>\n' +
    '            </div>\n' +
    '            <div class="grid-box branding">\n' +
    '                <img src="./img/resurce/dolor.png" alt="">\n' +
    '                <h1>Торговля</h1>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="services-content">\n' +
    '            <div class="circle">\n' +
    '                <img src="./img/resurce/circle.svg" >\n' +
    '            </div>\n' +
    '            <h1>ЧТО ТАКОЕ ФОНДОВАЯ БИРЖА</h1>\n' +
    '            <p>\n' +
    '                Это торговая площадка, где покупатели и продавцы встречаются для торговли акциями, облигациями, другими ценными бумагами и финансовыми инструментами. Здесь продаются и перепродаются ценные бумаги,\n' +
    '                Здесь формируется их рыночная стоимость, разрабатываются стандарты работы для всех участников рынка.</p>\n' +
    '            <p id="dot"></p>\n' +
    '            <p id="more2">Биржа работает по определенным правилам, среди которых следует упомянуть, прежде всего, государственное регулирование. Вот как вы можете обеспечить выполнение транзакций и общую надежность рынка: гарантии. Правда, постоянный контроль, строгий регламент.\n' +
    '                За счет строгого соблюдения правил и контроля за их выполнением,\n' +
    '                а также совершенствование технологий сводит к минимуму риски для участников процесса.</p>\n' +
    '            <a id="myBtnText"  onclick="myBtnText()" class="ctn">Ещё</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '<section class="numbers" id="section2"  data-aos="fade-left">\n' +
    '    <!--    <div class="who">-->\n' +
    '    <!--   <h1 class="num-text">-->\n' +
    '    <!--       WHO IS A TRADER AND WHAT DOES HE DO?</h1>-->\n' +
    '    <!--    <p>-->\n' +
    '\n' +
    '    <!--        A lot of such questions are asked to us and our team “Who is a trader? What does he do ”, and today we decided to share our view on this mysterious word.-->\n' +
    '    <!--        A trader in translation from English is a trader in the broadest sense of the word. The profession of a trader is very specific and does not require a diploma in economics. Anyone can become a trader, but desire alone is not enough to be successful. You must have a special predisposition and constantly improve. You are competing with the best of the best,-->\n' +
    '    <!--        and the only indicator of a trader\'s performance is the exchange yield.-->\n' +
    '    <!--        Those unfamiliar with the specifics of working in the financial market believe that a trader earns fabulous money in the shortest possible time. That one has only to learn to "read stock charts", master simple trading techniques, read a couple of books about trading, and a couple of million in your pocket!-->\n' +
    '\n' +
    '    <!--        In fact, this is a delusion that has nothing to do with reality. A trader can take losses for half a year, and then cover all the failures with a series of brilliant trades.-->\n' +
    '    <!--    </p>-->\n' +
    '\n' +
    '    <!--    </div>-->\n' +
    '    <div class="ocomapany">\n' +
    '        <h1 class="num-text">\n' +
    '            О компании</h1>\n' +
    '        <p>\n' +
    '\n' +
    '            Дорогие друзья и инвесторы! Мы рады приветствовать вас на сайте Blue Sky Investment. Выражаем Вам признательность за внимание и хотим сказать несколько слов о нашей компании. Blue Sky Investment - финансовая и инвестиционная консалтинговая компания мирового уровня. Учредитель и генеральный директор нашей компании - Нуриддинова Карина. Она профессиональный трейдер и имеет 7-летний опыт работы на бирже Forex. Несмотря на то, что наша компания была основана совсем недавно, мы можем с уверенностью сказать, что являемся лидерами рынка и уже работали с иностранными инвесторами со всего мира.компания blue sky торгует на нефть, золота, дорогими металлами и валютные пары.        </p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="container">\n' +
    '        <div class="grid-wrapper">\n' +
    '            <div class="grid-box hpyclients">\n' +
    '                <h1>2500+</h1>\n' +
    '                <h2>Счастливые клиенты</h2>\n' +
    '            </div>\n' +
    '            <div class="grid-box prjcompleted">\n' +
    '                <h1>750+</h1>\n' +
    '                <h2>Завершенных проектов</h2>\n' +
    '            </div>\n' +
    '            <div class="grid-box runningprj">\n' +
    '                <h1>200+</h1>\n' +
    '                <h2>Работающие проекты</h2>\n' +
    '            </div>\n' +
    '            <div class="grid-box designs">\n' +
    '                <h1>7+</h1>\n' +
    '                <h2>\n' +
    '                    Год опыта </h2>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="mockup-img">\n' +
    '            <img class="mockup_image" src="img/about-us/karina.jpg"/></div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '\n' +
    '<!-- projects-->\n' +
    '\n' +
    '<section class="projects" id="section3"  data-aos="zoom-in">\n' +
    '    <h1>Наше рабочее пространство</h1>\n' +
    '    <div class="project-images">\n' +
    '        <div class="prj-img">\n' +
    '            <img src="./img/bluesky/jahon.jpg" alt="">\n' +
    '            <div class="details">\n' +
    '                <h2>Инвестируйте в </h2>\n' +
    '                <h1>торговлю</h1>\n' +
    '                <i class="fa fa-arrow-circle-right"></i>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="prj-img">\n' +
    '            <img src="./img/bluesky/karinaandjahon.jpg" alt="">\n' +
    '            <div class="details">\n' +
    '                <h2>Инвестируйте в </h2>\n' +
    '                <h1>торговлю</h1>\n' +
    '                <i class="fa fa-arrow-circle-right"></i>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="prj-img">\n' +
    '            <img src="./img/bluesky/karinaAndCofe.jpg" alt="">\n' +
    '            <div class="details">\n' +
    '                <h2>Инвестируйте в </h2>\n' +
    '                <h1>торговлю</h1>\n' +
    '                <i class="fa fa-arrow-circle-right"></i>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '</section>\n' +
    '<section  class="numbers"  >\n' +
    '    <div class="who">\n' +
    '        <h1 class="num-text">\n' +
    '            КТО ТАКОЕ ТРЕЙДЕР И ЧЕМ ОН ДЕЛАЕТ?</h1>\n' +
    '        <p>\n' +
    '\n' +
    '            Нам и нашей команде задают много таких вопросов: «Кто такой трейдер? Чем он занимается », и сегодня мы решили поделиться своим взглядом на это загадочное слово.\n' +
    '            Трейдер в переводе с английского - это трейдер в самом широком смысле этого слова. Профессия трейдера очень специфична и не требует диплома экономиста. Стать трейдером может каждый, но для успеха недостаточно одного желания. Вы должны иметь особую предрасположенность и постоянно совершенствоваться. Вы соревнуетесь с лучшими из лучших,\n' +
    '            и единственный показатель эффективности трейдера - биржевой доход.\n' +
    '            Незнакомые со спецификой работы на финансовом рынке считают, что трейдер зарабатывает баснословные деньги в кратчайшие сроки. Достаточно только научиться «читать биржевые графики», освоить простые методы торговли, прочитать пару книг о трейдинге и пару миллионов в вашем кармане!\n' +
    '\n' +
    '            На самом деле это заблуждение, не имеющее ничего общего с реальностью. Трейдер может полгода терпеть убытки, а затем покрывать все неудачи серией блестящих сделок.\n' +
    '        </p>\n' +
    '\n' +
    '    </div>\n' +
    '</section>\n' +
    '<!--team-->\n' +
    '<section class="team" id="section4"  data-aos="flip-left">\n' +
    '    <h1 class="team-h1" >Познакомьтесь с нашей командой</h1>\n' +
    '    <div class="grid-wrapper">\n' +
    '        <div class="team-mem">\n' +
    '            <img src="./img/bluesky/karinaProfile.jpg" alt="">\n' +
    '            <h1>Karina Nuriddinova</h1>\n' +
    '            <h2>Генеральный директор и основатель</h2>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="team-mem">\n' +
    '            <img src="./img/bluesky/UmarjonProfile.jpg" alt="">\n' +
    '            <h1>Умарджон</h1>\n' +
    '            <h2>Управляющий делами</h2>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="team-mem">\n' +
    '            <img src="./img/bluesky/ustozProfil.jpg" alt="">\n' +
    '            <h1>Toshtemirov Feruzbek</h1>\n' +
    '            <h2>Лидер группы</h2>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '<section class="blogs" id="section5"  data-aos="zoom-in-up">\n' +
    '    <h1 class="blog-h1">Наши последние блоги</h1>\n' +
    '    <div class="grid-wrapper">\n' +
    '        <div class="blog">\n' +
    '            <img src="./img/about-us/munisa-and-karina.jpg" alt="">\n' +
    '            <h1>У нас грандиозная гость - Муниса</h1>\n' +
    '            <p>Друзья, сегодня у нас в гостях была замечательная певица Муниса Ризаева.\n' +
    '                Мы консультировались с ней по интересующим вопросам. Надеемся, вы многому научились для себя. Мы будем рады приветствовать вас снова.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">25.02.2021</span>\n' +
    '                </p>\n' +
    '            <br>\n' +
    '\n' +
    '            <br>\n' +
    '            <a >Ещё</a>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="blog">\n' +
    '            <img src="./img/resurce/blog2.png" alt="">\n' +
    '            <h1>КАКИМИ КАЧЕСТВАМИ ДОЛЖЕН ОБЛАДАТЬ ТРЕЙДЕР ?</h1>\n' +
    '            <p>Друзья, сегодня мы с моей командой решили поделиться парочкой советов начинающим трейдерам.\n' +
    '                Привлечение суммы, которую вы готовы проиграть.\n' +
    '                На рынке форекс существует такая негласная закономерность, что начинающий трейдер всегда проигрывает\n' +
    '                (на сленге трейдера - «сливает») свой первый депозит.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">18.02.2021</span>\n' +
    '            <p id="dot3"></p>\n' +
    '            <p id="more3">\n' +
    '                Это связано с тем, что новичок\n' +
    '                в торговле финансовыми инструментами еще не обладает всеми необходимыми торговыми навыками и психологией торговли. Некоторые брокеры форекс предлагают своим клиентам открыть так называемый центовый счет, который позволит им начать торговать реальными деньгами с суммы от 1 до 10 долларов.\n' +
    '                Самоконтроль и торговая психология.\n' +
    '                Профессиональные трейдеры знают, что такое психология трейдера. Новички на рынке форекс должны научиться контролировать свои эмоции, бороться со страхом и быть более решительными. Однако при этом следует быть осторожным и действовать по установленным правилам, а иногда просто нужно подождать.\n' +
    '                Демо счет\n' +
    '                Каждый профессиональный трейдер начинал свой торговый путь с торговли на демо-счете. Демо-счет - виртуальный счет, предоставляемый брокером для обучения тестированию торговой системы. Благодаря демо-счету начинающий трейдер может приобрести практические навыки торговли на финансовых рынках без риска потерять реальные деньги.\n' +
    '                Совет профессиональных трейдеров: занимайтесь на демо-счете, пока ваша торговая стратегия не начнет приносить стабильную прибыль.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">18.02.2021</span>\n' +
    '            </p>\n' +
    '            <br>\n' +
    '            <br>\n' +
    '            <a  id="myBtnText3" style="cursor:pointer;"  onclick="myBtnText3()" >Ещё</a>\n' +
    '\n' +
    '        </div>\n' +
    '        <div class="blog">\n' +
    '            <img src="./img/about-us/austin-distel-DfjJMVhwH_8-unsplash.jpg" alt="">\n' +
    '            <h1>\n' +
    '                НЕСКОЛЬКО СЛОВ О НАШЕМ ОСНОВАТЕЛЕ</h1>\n' +
    '            <p>И вот друзья сегодня мы хотели немного рассказать о нашем основателе.\n' +
    '\n' +
    '                Нуриддинова Карина - директор и основатель компании Bluesky.\n' +
    '                Имеет более 7 лет профессионального трейдинга на международном рынке.\n' +
    '                рынок позади нее. Имеет опыт работы с инвесторами в более\n' +
    '                более 15 стран, более 100 успешных проектов. Под ее руководством\n' +
    '                нам удалось добиться высоких результатов для наших инвесторов.\n' +
    '                <br>\n' +
    '                <span style="margin-top: 4px">18.02.2021</span>\n' +
    '            </p>\n' +
    '                <br>\n' +
    '\n' +
    '                <br>\n' +
    '                <a >Ещё</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '\n' +
    '    <section class="map">\n' +
    '        <div class="mapouter"><div class="gmap_canvas"><iframe width="1520" height="426" id="gmap_canvas" src="https://maps.google.com/maps?q=Tashkent%20,%20Uzbekistan%20Yunusabad%20district%20Osiyo,%2039&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org">fmovies</a><br><style>.mapouter{position:relative;text-align:right;height:426px;width:1520px;}</style>\n' +
    '            <a href="https://www.embedgooglemap.net">\n' +
    '            </a>\n' +
    '            <style>.gmap_canvas {overflow:hidden;background:none!important;height:426px;width:1520px;}</style></div></div>\n' +
    '    </section>\n' +
    '<section class="footer">\n' +
    '    <div class="grid-wrappener">\n' +
    '        <div class="col-4 footer1">\n' +
    '            <h1>Blue Sky Investment</h1>\n' +
    '            <p>Лучшие идеи, лучшие инвестиции, больше прибыли.\n' +
    '                Это лучшие отношения успеха. </p>\n' +
    '            <div class="soceal-profils">\n' +
    '                <a href="https://www.youtube.com/channel/UCqtfzERelXeRcQlknqHFQ0Q?guided_help_flow=5" target="_blank">  <i class=  "fa fa-youtube"></i></a>\n' +
    '                <a href="https://instagram.com/bluesky.uz?igshid=1s8ub10jaz1m3" target="_blank"><i class="fa fa-instagram"></i></a>\n' +
    '                <a href="https://www.facebook.com/Blueskyuz-100693928728221" target="_blank"><i class="fa fa-facebook"></i></a>\n' +
    '                <a href="https://t.me/blueskyinvestment" target="_blank"><i class="fa fa-telegram" ></i></a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-4 footer2">\n' +
    '            <h1> Контактная информация</h1>\n' +
    '            <h4>Ташкент, Узбекистан</h4>\n' +
    '            <h4>Юнусабадский район </h4>\n' +
    '            <h4>Осиё, 39 </h4>\n' +
    '            <h4>+998955142727</h4>\n' +
    '            <h4>08:00-20:00</h4>\n' +
    '            <a href="blueSkyInvestment@gamil.com"><h4>blueSkyInvestment@gamil.com</h4></a>\n' +
    '            <a href=""><h4></h4></a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '<i id="scrolltp" class="fa fa-arrow-up"></i>\n' +
    '</section>'
function languageUz(){
    document.getElementById("language").innerHTML=uz;
}
function languageRu(){
    document.getElementById("language").innerHTML=ru;
}
function languageEn(){
    document.getElementById("language").innerHTML=en;
    console.log(en)
}

function myMenu() {
    var x = document.getElementById("nav-list");
    if (x.className === "nav-list") {
        x.className += " topnav";
    } else {
        x.className = "nav-list";
    }
}














