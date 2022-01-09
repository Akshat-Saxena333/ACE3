var name2,choice2;

function savedata2() {

    let dob, panname, pannumber;

    dob = document.getElementById("dob2").value;
    panname = document.getElementById("panname2").value;
    pannumber = document.getElementById("pannumber2").value;
    let select = document.getElementById("proof2");


    let temp;
    let gender;
    let gend = Array();
    for (let i = 0; i < 3; i++) {
        gend[i] = document.getElementsByName("gend")[i];
        if (gend[i].checked)
            // gender=gend[i].value;
            temp = i;
    }





    // let user_records = new Array();
    // user_records = JSON.parse(localStorage.getItem("users2")) ? JSON.parse(localStorage.getItem("users2")) : []
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
    //     localStorage.setItem("users2", JSON.stringify(user_records));
    // }

    // var name2;

    document.getElementsByClassName('name2_pg2')[0].innerHTML = panname;
    document.getElementsByClassName('dob2')[0].innerHTML = dob;
    document.getElementsByClassName('id2')[0].innerHTML =  select.value
    name2=panname;
    choice=select.value;

}

function form2pg(){

    swal({
        title: "Success",
        text: "Individual successfully registered!",
        icon: "success",
        button: "Click here to proceed",
    });



    document.getElementById("form2pg").style.display = 'none';
    document.getElementById("person2pg").style.display = 'block';

    dob = document.getElementById("dob2").value=null;
    panname = document.getElementById("panname2").value=null;
    pannumber = document.getElementById("pannumber2").value=null;
     select = document.getElementById("proof2").value=null


}


// function schedule11(){


//     localStorage.setItem("person2_name",name2);


// }


function schedule21(){

    localStorage.setItem("person1_name",name2);
   
    localStorage.setItem("choice1",choice2);


    document.getElementById("slotpg").style.display='block';
    document.getElementById("person2pg").style.display='none';




}


function schedule22(){

    localStorage.setItem("person1_name",name2);
   
    localStorage.setItem("choice1",choice2);


    document.getElementById("slotpg").style.display='block';
    document.getElementById("person2pg").style.display='none';




}


