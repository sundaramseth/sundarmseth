
function openNav() {
   document.getElementById("mySidenav").style.width = "auto";
    document.getElementById("main").style.width = "auto";
    document.getElementById('sidebaropen').style.display = "none";
    document.getElementById('sidebarclose').style.display = "block";
    document.getElementById('lisideopen1').style.display = "inline-flex";
    document.getElementById('lisideopen2').style.display = "inline-flex";
    document.getElementById('lisideopen3a').style.display = "inline-flex";
    document.getElementById('lisideopen3').style.display = "inline-flex";
    document.getElementById('lisideopen4').style.display = "inline-flex";
    document.getElementById('lisideopen5').style.display = "inline-flex";

  }

  // var x = window.matchMedia("(max-width: 600px)");

  
  // function myFunction(x) {
  //   if (x.matches) { // If media query matches
  //     closeNav();
  //     document.body.style.backgroundImage = "url('')";
  //   } else {
  //     closeNav();
  //     document.body.style.backgroundImage = "url('')";
 
  //   }
  // }
  
  // myFunction(x) // Call listener function at run time
  // x.addEventListener(null,myFunction) // Attach listener function on state changes

  closeNav();

  function closeNav() {
    document.getElementById("mySidenav").style.width = "auto";
    document.getElementById("mySidenav").style.overflow = "hidden";
    document.getElementById('sidebarclose').style.display = "none";
    document.getElementById('sidebaropen').style.display = "block";

    document.getElementById('lisideclose1').style.display = "block";
    document.getElementById('lisideopen1').style.display = "none";
    document.getElementById('lisideclose2').style.display = "block";
    document.getElementById('lisideopen2').style.display = "none";
    document.getElementById('lisideclose3a').style.display = "block";
    document.getElementById('lisideopen3a').style.display = "none";
    document.getElementById('lisideclose3').style.display = "block";
    document.getElementById('lisideopen3').style.display = "none";
    document.getElementById('lisideclose4').style.display = "block";
    document.getElementById('lisideopen4').style.display = "none";
    document.getElementById('lisideclose5').style.display = "block";
    document.getElementById('lisideopen5').style.display = "none";
    
    

  }

  document.getElementById('lborderli1').style.borderLeft = "2px solid #000000"
  document.getElementById('lborderli2').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli3').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli4').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli5').style.borderLeft = "1px solid #bbbbbb"

  document.getElementById('lborderli1').style.background = "#0067ff26"
  document.getElementById('lborderli2').style.background = "none"
  document.getElementById('lborderli3').style.background = "none"
  document.getElementById('lborderli4').style.background = "none"
  document.getElementById('lborderli5').style.background = "none"

const ex1nav = document.getElementById("ex1nav");
ex1nav.addEventListener("click", exp1card);

function exp1card(){
  console.log("ss")
  document.getElementById('lborderli1').style.borderLeft = "2px solid #000000"
  document.getElementById('lborderli2').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli3').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli4').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli5').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli1').style.background = "#0067ff26"
  document.getElementById('lborderli2').style.background = "none"
  document.getElementById('lborderli3').style.background = "none"
  document.getElementById('lborderli4').style.background = "none"
  document.getElementById('lborderli5').style.background = "none"
  document.getElementById('ex1').style.display = "block";
  document.getElementById('ex2').style.display ="none";
  document.getElementById('ex3').style.display ="none";
  document.getElementById('ex4').style.display ="none";
  document.getElementById('ex5').style.display ="none";

}

const ex2nav = document.getElementById("ex2nav");

ex2nav.addEventListener("click", exp2card);

function exp2card(){

  document.getElementById('lborderli1').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli2').style.borderLeft = "2px solid #000000"
  document.getElementById('lborderli3').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli4').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli5').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli1').style.background = "none"
  document.getElementById('lborderli2').style.background = "#0067ff26"
  document.getElementById('lborderli3').style.background = "none"
  document.getElementById('lborderli4').style.background = "none"
  document.getElementById('lborderli5').style.background = "none"
  document.getElementById('ex1').style.display = "none";
  document.getElementById('ex2').style.display ="block";
  document.getElementById('ex3').style.display ="none";
  document.getElementById('ex4').style.display ="none";
  document.getElementById('ex5').style.display ="none";
}

const ex3nav = document.getElementById("ex3nav");

ex3nav.addEventListener("click", exp3card);

function exp3card(){
  document.getElementById('lborderli1').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli2').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli3').style.borderLeft = "2px solid #000000"
  document.getElementById('lborderli4').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli5').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli1').style.background = "none"
  document.getElementById('lborderli2').style.background = "none"
  document.getElementById('lborderli3').style.background = "#0067ff26"
  document.getElementById('lborderli4').style.background = "none"
  document.getElementById('lborderli5').style.background = "none"
  document.getElementById('ex1').style.display = "none";
  document.getElementById('ex2').style.display ="none";
  document.getElementById('ex3').style.display ="block";
  document.getElementById('ex4').style.display ="none";
  document.getElementById('ex5').style.display ="none";
}

const ex4nav = document.getElementById("ex4nav");

ex4nav.addEventListener("click", exp4card);

function exp4card(){
  document.getElementById('lborderli1').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli2').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli3').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli4').style.borderLeft = "2px solid #000000"
  document.getElementById('lborderli5').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli1').style.background = "none"
  document.getElementById('lborderli2').style.background = "none"
  document.getElementById('lborderli3').style.background = "none"
  document.getElementById('lborderli4').style.background = "#0067ff26"
  document.getElementById('lborderli5').style.background = "none"
  document.getElementById('ex1').style.display = "none";
  document.getElementById('ex2').style.display ="none";
  document.getElementById('ex3').style.display ="none";
  document.getElementById('ex4').style.display ="block";
  document.getElementById('ex5').style.display ="none";
}

const ex5nav = document.getElementById("ex5nav");

ex5nav.addEventListener("click", exp5card);

function exp5card(){
  document.getElementById('lborderli1').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli2').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli3').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli4').style.borderLeft = "1px solid #bbbbbb"
  document.getElementById('lborderli5').style.borderLeft = "2px solid #000000"
  document.getElementById('lborderli1').style.background = "none"
  document.getElementById('lborderli2').style.background = "none"
  document.getElementById('lborderli3').style.background = "none"
  document.getElementById('lborderli4').style.background = "none"
  document.getElementById('lborderli5').style.background = "#0067ff26"
  document.getElementById('ex1').style.display = "none";
  document.getElementById('ex2').style.display ="none";
  document.getElementById('ex3').style.display ="none";
  document.getElementById('ex4').style.display ="none";
  document.getElementById('ex5').style.display ="block";
}

  


var showmore = document.getElementById("showmorebtn");
var showless = document.getElementById("showlessbtn");

showmore.addEventListener("click",showdata);

showless.addEventListener("click",showlessdata)


function showdata(){
  document.getElementById('hideshowmore').style.display = "inline-flex";

  document.getElementById('showmorebtn').style.display = "none";
  document.getElementById('showlessbtn').style.display = "inline";
}
  
function showlessdata(){
  document.getElementById('hideshowmore').style.display = "none";
  document.getElementById('showmorebtn').style.display = "inline";
  document.getElementById('showlessbtn').style.display = "none";
}


var showmore2 = document.getElementById("showmorebtn2");
var showless2 = document.getElementById("showlessbtn2");

showmore2.addEventListener("click",showdata2);

showless2.addEventListener("click",showlessdata2)


function showdata2(){
  document.getElementById("hideitem").style.display = "block";
  document.getElementById('showmorebtn2').style.display = "none";
  document.getElementById('showlessbtn2').style.display = "inline";
}
  
function showlessdata2(){
  document.getElementById("hideitem").style.display = "none";
  document.getElementById('showmorebtn2').style.display = "inline";
  document.getElementById('showlessbtn2').style.display = "none";
}


const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Form successfully submitted"))
    .catch((error) => alert(error));
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);


    // Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 28.543552566085328, lng: 77.19213205258856 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;