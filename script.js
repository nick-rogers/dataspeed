$(document).ready(function(){

console.log('linked');




/* DATA LOADING --------------------------------------------------- */

/* Load in the baby name data from json file */
var dataset;
var loaded = false;
	$.getJSON('data/f-a.json', function(data){
		dataset = data;
		dataReady();
});


/* Function fires when the json file is finished loading */
function dataReady() {
	console.log('loaded');
	loaded = true;
	prepData();
}



function prepData(){
	console.log('prepping');
	console.log(dataset);

}






var textForm = document.getElementById('text-form');
var sub = document.getElementById('sub');


sub.addEventListener("click", function(){
  logContents();
});


var submitted;
function logContents(){
	submitted = textForm.value;
	submitted = submitted.substring(0,1);
	submitted = submitted.toLowerCase();
	console.log(submitted);
	grabName(submitted);
}



var gData;
function grabName(input){
	var filePath = 'data/f-'+input+'.json';

	$.getJSON(filePath, function(data){
		gData = data;
		finishedLoading(gData);
	});

}




function finishedLoading(data){
	
	console.log('finished loading');
	console.log(data);

}






});