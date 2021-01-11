// getting the user input in form of an object


function show(){
    let obj = localStorage.getItem("tasks");

    if (obj != null) {
        obj = JSON.parse(obj);
    }
    else {
        obj = [];
    }

    let html = "";
    obj.forEach(function (element, index) {
        html += `
        <tr>
        <td>${element.time}</td>
        <td>${element.task}</td>
        <td class="del"></td>
        </tr>`;

    })
    if(html==""){ html=`<h2> Come On! Mate, Add some Tasks</h2>`;
    document.querySelector(".table").style.visibility = "hidden";
}
    document.getElementById("tasktable").innerHTML = html;
}




tickbtn = document.querySelector(".tickbtn");
tickbtn.addEventListener('click',()=>{

    let obj = JSON.parse(localStorage.getItem("tasks"));
    if (obj == null) { obj = []; }
    // console.log(document.getElementById("inputtime").value);
    obj.push({
        "time": document.getElementById("inputtime").value,
        "task": document.getElementById("inputtext").value,
    })
    localStorage.setItem("tasks", JSON.stringify(obj));
    // show();
    document.getElementById("inputtime").value=null;
    document.getElementById("inputtext").value= "";
    show();
        // document.querySelector(".linkinput").style.border = "2px solid red";
        // document.querySelector(".timeinput").style.border = "2px solid red";
        // setTimeout(() => {
        //     document.querySelector(".linkinput").style.border = "2px solid black";
        //     document.querySelector(".timeinput").style.border = "2px solid black";
        // }, 2000);
   })



// main function calls 

show();