// let user_records = new Array();
// user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

// document.getElementById("name1_pg1").innerHTML = localStorage.getItem("panname1");
// document.getElementById("person1dob").innerHTML = localStorage.getItem("dob1");
// document.getElementById("id").innerHTML =  localStorage.getItem("identification1");

let x=localStorage.getItem("panname1");
document.getElementById("name1_pg1").innerHTML = x;

// let y=localStorage.getItem("dob1");
// document.getElementById("person1dob").innerHTML = y;

// let z=localStorage.getItem("identification1");
// document.getElementById("id").innerHTML = z;

// console.log(user_records[0].panname);
// console.log(user_records[0].dob);
console.log(x);



function func() {
    swal({
        title: "Success",
        text: "Individual successfully registered!",
        icon: "success",
        button: "Click here to proceed",
    });
}

function person1pg(){

    document.getElementById("person1pg").style.display='none';
    document.getElementById("form2pg").style.display='block';

}

function delfunc(){

    document.getElementById("delperson1").style.display='none';
}