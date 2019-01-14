jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    

//////////


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



