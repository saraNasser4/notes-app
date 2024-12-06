const btn = document.querySelector("button");
const textContainer = document.querySelector(".text-box");
const notes = document.querySelectorAll(".input-box")

btn.addEventListener("click", () => {
    let p = document.createElement("p");
    let img = document.createElement("img");
    
    p.classList = "input-box";
    img.classList = "trash-icon";
    
    p.setAttribute("contenteditable", "true");
    img.src = "img/delete.png"
    
    textContainer.appendChild(p).appendChild(img);
    saveNotes();
})


textContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveNotes();
    }
})

function saveNotes() {
    localStorage.setItem("notes", textContainer.innerHTML);
}

function showNotes() {
    textContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

