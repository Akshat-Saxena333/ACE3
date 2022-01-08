

var name1;
var choice;
function savedata() {




    let dob, panname, pannumber;

    dob = document.getElementById("dob").value;
    panname = document.getElementById("panname").value;
    pannumber = document.getElementById("pannumber").value;
    let select = document.getElementById("proof");


    let temp;
    let gender;
    let gend = Array();
    for (let i = 0; i < 3; i++) {
        gend[i] = document.getElementsByName("gend")[i];
        if (gend[i].checked)
            // gender=gend[i].value;
            temp = i;
    }



    document.getElementById("name1_pg1").innerHTML = panname;
document.getElementById("person1dob").innerHTML = dob;
document.getElementById("id").innerHTML =  select.value

let x;
document.getElementsByClassName('name1_pg1')[0].innerHTML = panname;
console.log(x);
document.getElementsByClassName('person1dob')[0].innerHTML = dob;
document.getElementsByClassName('id')[0].innerHTML =  select.value;


name1=panname;
choice=select.value;


// dob = document.getElementById("dob").value=null;
//     panname = document.getElementById("panname").value=null;
//     pannumber = document.getElementById("pannumber").value=null;
//      select = document.getElementById("proof")=null;

    // localStorage.setItem("dob1",dob);
    // localStorage.setItem("panname1",panname);
    // localStorage.setItem("panumber1",pannumber);
    // localStorage.setItem("gend1",gend[temp].value);
    // localStorage.setItem("identification1",select.value);






    // let user_records = new Array();
    // user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    // if ((user_records.some((v) => { return v.pannumber == pannumber })) || (user_records.some((v) => { return v.panname == panname }))) {
    //     alert("duplicate data");
    // }
    // else {
    //     user_records.push({
    //         "dob": dob,
    //         "panname": panname,
    //         "pannumber": pannumber,
    //         "abc": gend[temp].value,
    //         "identification": select.value



    //     })
    //     localStorage.setItem("users", JSON.stringify(user_records));
    // }

}


function formpg() {

    swal({
        title: "Success",
        text: "Individual successfully registered!",
        icon: "success",
        button: "Click here to proceed",
    });

    document.getElementById("formpg").style.display = 'none';
    document.getElementById("person1pg").style.display = 'block';


    dob = document.getElementById("dob").value=null;
    panname = document.getElementById("panname").value=null;
    pannumber = document.getElementById("pannumber").value=null;
     select = document.getElementById("proof").value=null;
   


    // swal({
    //     title: "Success",
    //     text: "Individual successfully registered!",
    //     icon: "success",
    //     button: "Click here to proceed",
    // });

}


function schedule11(){


    localStorage.setItem("person1_name",name1);
    console.log("hello");
    localStorage.setItem("choice",choice);
    
    document.getElementById("slotpg").style.display='block';
    document.getElementById("person1pg").style.display='none';


}