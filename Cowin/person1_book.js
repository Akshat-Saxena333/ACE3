
        // document.getElementById("hospital").innerHTML = localStorage.getItem("hospital");


        // let user_records = new Array();
        // user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

        // document.getElementById("patient").innerHTML = user_records[0].panname;
        // document.getElementById("dob").innerHTML = user_records[0].dob;
        // document.getElementById("id").innerHTML = user_records[0].identification;

        // function func1() {

        //     let va;

        //     va = document.getElementById("one").value;

        //     document.getElementById("time").innerHTML = va;
        //     console.log(va);
        //     document.getElementById("ctime1").innerHTML = va;
        // document.getElementById("cprefrence1").innerHTML = va;



        // }


        // function func2() {

        //     let va;

        //     va = document.getElementById("two").value;
        //     console.log(va);

        //     document.getElementById("time").innerHTML = va;
        //     document.getElementById("ctime1").innerHTML = va;
        //     document.getElementById("cprefrence1").innerHTML = va;



        // }



        // function func3() {

        //     let va;

        //     va = document.getElementById("three").value;
        //     console.log(va);

        //     document.getElementById("time").innerHTML = va;
        //     document.getElementById("ctime1").innerHTML = va;
        //     document.getElementById("cprefrence1").innerHTML = va;



        // }



        // function func4() {

        //     let va;

        //     va = document.getElementById("four").value;
        //     console.log(va);

        //     document.getElementById("time").innerHTML = va;
        //     document.getElementById("ctime1").innerHTML = va;
        //     document.getElementById("cprefrence1").innerHTML = va;



        // }

        function confirm12() {

            document.getElementById("timings").style.display = 'none';
            document.getElementById("details1").style.display = 'none';
            document.getElementById("namebox").style.display = 'none';
            document.getElementById("confirmbutton").style.display = 'none';

            document.getElementById("confirmbox").style.display = 'block';
            document.getElementById("confirmation").style.display = 'block';
            document.getElementById("confirmation2").style.display = 'block';
            document.getElementById("confirmationdetail").style.display = 'block';
            document.getElementById("appointmentsuccess").style.display = 'block';
            document.getElementById("instructions").style.display = 'block';
            document.getElementById("closebutton").style.display = 'block';


        }

        // document.getElementById("patient").innerHTML = localStorage.getItem("person1_name").value;
        // document.getElementById("vaccine").innerHTML = localStorage.getItem("vaccine").value;
        // document.getElementById("date").innerHTML = localStorage.getItem("date1").value;
        // console.log(localStorage.getItem("person1_name").value);


        document.getElementById("cdate1").innerHTML = localStorage.getItem("date1").value;
        document.getElementById("finalname1").innerHTML = localStorage.getItem("person1_name").value;
       


