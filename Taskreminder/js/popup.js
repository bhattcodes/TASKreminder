// getting the user input in form of an object
console.log("here in app");


function show() {
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
        <td class="del" id="${index}" "></td>
        </tr>`;

    })

    document.getElementById("tasktable").innerHTML = html;
}

function xyz() {
    let i;
    for (i = 0; i < document.getElementsByClassName("del").length; i++) {

        document.getElementsByClassName(".del")[i].addEventListener('click', () => {
            console.log("here! in deletetask", document.getElementsByClassName(".del")[i].getAttribute("id"));
            // console.log(xt.getAttribute("id"));
            // deletetask(xt.getAttribute("id"));

        })

    }

}


function deletetask(index) {
    let obj = localStorage.getItem("tasks");

    if (obj != null) {
        obj = JSON.parse(obj);
    }
    else {
        obj = [];
    }
    obj.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(obj));
    show();

}


let tickbtn = document.querySelector(".tickbtn");
tickbtn.addEventListener('click', () => {

    let obj = JSON.parse(localStorage.getItem("tasks"));
    if (obj == null) { obj = []; }

    obj.push({
        "time": document.getElementById("inputtime").value,
        "task": document.getElementById("inputtext").value,
    })
    if ((document.getElementById("inputtext").value != "") &&
        (document.getElementById("inputtime").value)) {

        localStorage.setItem("tasks", JSON.stringify(obj));
        document.getElementById("inputtime").value = null;
        document.getElementById("inputtext").value = "";
    } else {
        document.querySelector("#inputtime").style.border = "2px solid red";
        document.querySelector("#inputtext").style.border = "2px solid red";
        setTimeout(() => {
            document.querySelector("#inputtime").style.border = "2px solid black";
            document.querySelector("#inputtext").style.border = "2px solid black";
        }, 2000);

    }

    show(); xyz();
})



// main function calls 

show();