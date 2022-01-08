function Display(instructionId, instructionId2) {

  document.getElementById(instructionId).style.display = "none";
  document.getElementById(instructionId2).style.display = "block";
  document.getElementById(instructionId2).style.height = "44.7vh";
}

function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

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

function web_display(instructionId, instructionId2, startweb) {
  Display(instructionId, instructionId2);


  let start = document.getElementById(startweb);
  let startbtn = document.querySelector(".btn-start");
  let stopbtn = document.querySelector(".btn-stop");
  startbtn.click();
}

function weboff_display(instructionId, instructionId2, stopweb) {
  Display(instructionId, instructionId2);


  let start = document.getElementById(stopweb);
  let startbtn = document.querySelector(".btn-start");
  let stopbtn = document.querySelector(".btn-stop");
  stopbtn.click();
}

function skip(instructionId, instructionId2) {
  Display(instructionId, instructionId2);

  setTimeout(function() {
    document.getElementById("Instruction10").style.display = "none";
    document.getElementById("Instruction11").style.display = "block";
    document.getElementById("Instruction11").style.height = "44.7vh";
  },5000);
}
