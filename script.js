let form = document.getElementById('form');

form.addEventListener('submit', function(e){

e.preventDefault();

var title = e.target.title.value;
var url = e.target.url.value;
var pdes = e.target.pdes.value;
var descrip = e.target.descrip.value;


console.log(title, url, pdes, descrip);



})