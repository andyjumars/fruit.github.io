var noteList = document.querySelector('.list');
var noteBtn = document.querySelector('.btn');
var noteData = JSON.parse(localStorage.getItem('localStorage')) || [];

noteList.addEventListener('click',deleteNote,false);
noteBtn.addEventListener('click',addNote,false);

function addNote(e) {
	e.preventDefault();
	var noteText = document.querySelector('.notetext').value;
	var noteArray = {
		content:noteText
	};
	noteData.push(noteArray);
	updateNote(noteData);
	localStorage.setItem('localStorage',JSON.stringify(noteData));

}

function updateNote(items) {
	var noteLength = items.length;
	var noteStr="";
	for(var i=0;i<noteLength;i++){
		noteStr+='<li><a href="#" data-index="'+i+'">刪除</a> '+items[i].content+'</li>';
	};
		noteList.innerHTML = noteStr;
}


function deleteNote(e) {
  e.preventDefault();
  if(e.target.nodeName !== 'A') {return};
  	var index = e.target.dataset.index;
  	noteData.splice(index,1);
  	
  	localStorage.setItem('localStorage',JSON.stringify(noteData));
  	updateNote(noteData);
}


