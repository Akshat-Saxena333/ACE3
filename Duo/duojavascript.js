function demoDisplay(instructionId, instructionId2) {

  document.getElementById(instructionId).style.display = "none";
  document.getElementById(instructionId2).style.display = "block";
  document.getElementById(instructionId2).style.height = "44.7vh";
  // document.getElementById(instructionId2).style.height = "58vh";
}

// function demoblock(instructionId){
//     document.getElementById(instructionId).style.display = "block";
// }


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// function web(startweb) {
//   let startweb = document.getElementById(startweb);
//   let startbtn = document.querySelector(".btn-start");
//   let stopbtn = document.querySelector(".btn-stop");
//   startweb.addEventListener("click", () => {
//     startbtn.click();
//   })
// }

// let startweb = document.getElementById("startweb");
// let startbtn = document.querySelector(".btn-start");
// let stopbtn = document.querySelector(".btn-stop");
// startweb.addEventListener("click",()=>{
//   startbtn.click();
// })

function web_display(instructionId, instructionId2, startweb) {
  demoDisplay(instructionId, instructionId2);


  let start = document.getElementById(startweb);
  let startbtn = document.querySelector(".btn-start");
  let stopbtn = document.querySelector(".btn-stop");
  startbtn.click();
}

function weboff_display(instructionId, instructionId2, stopweb) {
  demoDisplay(instructionId, instructionId2);


  let start = document.getElementById(stopweb);
  let startbtn = document.querySelector(".btn-start");
  let stopbtn = document.querySelector(".btn-stop");
  stopbtn.click();
}


// function changepage(instructionId, instructionId2) {
//   demoDisplay(instructionId, instructionId2);
//   let video_box = document.getElementById("dummyelement").nextElementSibling;
//   video_box.remove();
//   let video_box2 = document.getElementById("dummyelement2").nextElementSibling;
//   video_box2.setAttribute("id","video");
// }

// function weboff_on(instructionId, instructionId2, stopweb) {
//   weboff_display(instructionId, instructionId2, stopweb);
//   // demoDisplay(instructionId, instructionId2);
//   // web_display(instructionId, instructionId2, startweb);

//   let start = document.getElementById(startweb);
//   let startbtn = document.querySelector(".btn-start");
//   let stopbtn = document.querySelector(".btn-stop");
//   startbtn.click();

// }

// document.getElementById("open").addEventListener("click",function(){
//   document.getElementsByClassName("popup")[0].classList.add("active");
// });

// document.getElementById("next").addEventListener("click",function(){
//   document.getElementById("popup")[0].classList.remove("active");
// });


// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


