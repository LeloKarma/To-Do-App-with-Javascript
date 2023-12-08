const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

 function addTask(){
     if(inputBox.value === ''){

        alert("Enter a task");
     }else{
        
        //create the listings
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        //create the remove button
        let span = document.createElement("span");
        span.innerHTML =  "\u00d7"; //cross symbol
        li.appendChild(span);
     }

     //to clear the inputbox after the user has entered a task
    inputBox.value = "";
    saveTask();
}


listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
});

function saveTask(){
    //store input to the localStorage
     localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){

    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();