'use strict';

var divEl = document.getElementById('userNotes');

var formEl = document.getElementById('form');

var notesArray = [];

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  var newNote = event.target.userNotes.value;
  notesArray.push(newNote);
  writeNotes(newNote);
}

function writeNotes(newNote) {
  var pEl = document.createElement('p');
  pEl.textContent = newNote;
  divEl.appendChild(pEl);
  console.log(notesArray);
}
