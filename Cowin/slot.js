function funca() {

    let x = document.getElementById("pindiv").style.display = 'block';
    let y = document.getElementById("disdiv").style.display = 'none';
}

function func2a() {

    let z = document.getElementById("pindiv").style.display = 'none';
    let v = document.getElementById("disdiv").style.display = 'block';
}

function slot_book() {

    document.getElementById("id_container").style.display = 'none';
}

function slot_func() {

    document.getElementById("id_container").style.display = 'block';
}

function savedata_covishield() {

    let hptl,date,vac;

    hptl = document.getElementById("hh").value;
    date='5 Jan 2022';
    vac='COVISHIELD';
    
    localStorage.setItem("hospital", hptl);
    localStorage.setItem("date1", date);
    localStorage.setItem("vaccine", vac);

    document.getElementById("person1_bookpg").style.display='block';
    document.getElementById("slotpg").style.display='none';


    document.getElementById("patient").innerHTML = localStorage.getItem("person1_name");
        document.getElementById("vaccine").innerHTML = localStorage.getItem("vaccine");
        document.getElementById("date").innerHTML = localStorage.getItem("date1");
        console.log(localStorage.getItem("person1_name"));
        document.getElementById("hospital").innerHTML = localStorage.getItem("hospital");
        document.getElementById("finalname").innerHTML=localStorage.getItem("person1_name");
        document.getElementById("cdate1").innerHTML=localStorage.getItem("date1");
        document.getElementById("finalid").innerHTML=localStorage.getItem("choice");

    

    
}


function savedata_covaxin() {

    let hptl,date,vac;

    hptl = document.getElementById("sh").value;
    date='8 Jan 2022';
    vac='COVAXIN';


    localStorage.setItem("hospital", hptl);
    localStorage.setItem("date1", date);
    localStorage.setItem("vaccine", vac);


    document.getElementById("person1_bookpg").style.display='block';
    document.getElementById("slotpg").style.display='none';


    document.getElementById("patient").innerHTML = localStorage.getItem("person1_name");
        document.getElementById("vaccine").innerHTML = localStorage.getItem("vaccine");
        document.getElementById("date").innerHTML = localStorage.getItem("date1");
        console.log(localStorage.getItem("person1_name"));
        document.getElementById("hospital").innerHTML = localStorage.getItem("hospital");

        document.getElementById("finalname").innerHTML=localStorage.getItem("person1_name");
        document.getElementById("cdate1").innerHTML=localStorage.getItem("date1");
        document.getElementById("finalid").innerHTML=choice;
}
