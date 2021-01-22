console.log("here in app");

// fetch the data from local storage n show in the UI
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
        <td class="del" id="${index}" ></td>
        </tr>`;

    })

    document.getElementById("tasktable").innerHTML = html;
    xyz();
}

// below fxn adds event listeners to all the tasks
function xyz() {                         
    if (localStorage.getItem("tasks") != null) {
        let i;
        for (i = 0; i < document.getElementsByClassName("del").length; i++) {
            console.log(`added in ${i}`);
            document.getElementsByClassName("del")[i].addEventListener('click', (e) => {

                console.log("here! in deletetask",e.path[0].attributes.id.value);
                deletetask(e.path[0].attributes.id.value);

            })

        }

    }
}

// deletes the clicked task by taking the id of the element
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

// when tick btn is clicked updates the local storage! 
let tickbtn = document.querySelector(".tickbtn");
tickbtn.addEventListener('click', () => {

    let obj = JSON.parse(localStorage.getItem("tasks"));
    if (obj == null) { obj = []; }
    // getting the user input in form of an object
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