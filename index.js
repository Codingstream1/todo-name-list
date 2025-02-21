const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return;
    }

    // Create a new <li> element
    let li = document.createElement("li");
    li.innerText = inputBox.value;

    // Click to toggle checked class (for marking as completed)
    li.addEventListener("click", function () {
        li.classList.toggle("checked");
    });

    // Add delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode for '×' (delete symbol)
    span.style.marginLeft = "10px";
    span.style.cursor = "pointer";
    span.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    listContainer.appendChild(li);

    // Clear input field after adding
    inputBox.value = "";
}
