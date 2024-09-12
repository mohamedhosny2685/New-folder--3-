const noteInput = document.getElementById("noteInput");
var notesArray = [];


function addNote() {
    const newNote = noteInput.value;
    if (newNote == "") {
        alert("Please enter valid text");
    } else {
        notesArray.push(newNote);
        noteInput.value = "";
        saveNotes();
        console.log(notesArray);
    }
}

function saveNotes() {
    const notesString = JSON.stringify(notesArray);
    localStorage.setItem("notes", notesString);
}

function getNotes() {
    const notesString = localStorage.getItem("notes");
    if (notesString == null) {
        console.log("notesString null");
    } else {
        notesArray = JSON.parse(notesString);
    }
}