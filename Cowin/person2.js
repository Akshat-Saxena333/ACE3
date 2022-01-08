// let user_records3 = new Array();
// user_records3 = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

// document.getElementById("name1_pg2").innerHTML = user_records3[0].panname;
// document.getElementById("person1dob_pg2").innerHTML = user_records3[0].dob;
// document.getElementById("id_pg2").innerHTML = user_records3[0].identification;





// let user_records2 = new Array();
// user_records2 = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

// document.getElementById("name2_pg2").innerHTML = user_records2[1].panname;
// document.getElementById("dob2").innerHTML = user_records2[1].dob;
// document.getElementById("id2").innerHTML = user_records2[1].identification;
// console.log(user_records2[0].panname);


function func() {
    swal({
        title: "Success",
        text: "Individual successfully registered!",
        icon: "success",
        button: "Click here to proceed",
    });
}

function delfunc21(){

    document.getElementById("delperson21").style.display='none';
}

function delfunc22(){
    
    document.getElementById("delperson22").style.display='none';
}