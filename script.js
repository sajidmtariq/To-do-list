let input_box = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function adtask() {
    if (input_box.value === '') {
        alert("You must write something.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)
    }
    input_box.value = "";
}

