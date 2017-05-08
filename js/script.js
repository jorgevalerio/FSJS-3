
// Global variables

const nameField = document.getElementById('name');
const titleField = document.getElementById('title');
const jobother = document.getElementById('jobother');
const design = document.getElementById('design');
const colorsJsPuns = document.getElementById('colors-js-puns') ;
const colorOptions = document.getElementById('color');
const activities = document.querySelector(".activities").children;

let mainConference = activities[1].firstChild;
	let jsFrameworks = activities[2].firstChild;
	let jsLibs = activities[3].firstChild;
	let express = activities[4].firstChild;
	let node = activities[5].firstChild;
	let buildTools = activities[6].firstChild;
	let npm = activities[7].firstChild;


titleField.addEventListener("click", titleOther);
design.addEventListener("change", displayColor);



// Functions

function setFocus(el) {
	el.focus();
}

setFocus(nameField);







function titleOther(){
	if(titleField.value ==='other'){
		jobother.style.display = "block";
	} else {
		jobother.style.display = "none";
		}
}




function displayColor(){
colorsJsPuns.style.display = "block";

	if (design.value=== 'js puns'){
		let colorSelect = '<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>';
		colorSelect += '<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> ';
		colorSelect += '<option value="gold">Gold (JS Puns shirt only)</option> ';
		color.innerHTML = colorSelect;
	} else {
		let colorSelect = '<option value="tomato">Tomato (I &#9829; JS shirt only)</option>';
		colorSelect += '<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>  ';
		colorSelect += '<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>';
		color.innerHTML = colorSelect;
		
	}
	
} 


let div = document.createElement('div');
		div.className= "ninguno";
		let text = document.createTextNode('Total: $0');
		div.appendChild(text);
		document.querySelector(".activities").appendChild(div);

// For loop to add an event listener to each input file for activities

for (let activitiesIndex = 0 ; activitiesIndex < activities.length ; activitiesIndex++) {
	

	
	activities[activitiesIndex].addEventListener('change', function(){
		
		let totalCost = 0;	
	    
        let totalCostMoney = document.getElementsByClassName('ninguno')[0];
        console.log(totalCostMoney.textContent);
		
	
		
		
		
		if(mainConference.checked){
			
			totalCost += 200;
			totalCostMoney.textContent = 'Total: $'+ totalCost;
			
		}else{
			
			totalCostMoney.textContent = 'Total: $'+ totalCost;
		}
		
		
		if (jsFrameworks.checked){
			
			
			totalCost += 100;
			express.disabled = true;
			express.parentNode.style.color ="gray";
			express.parentNode.style.textDecoration = "line-through";
			totalCostMoney.textContent = 'Total: $'+ totalCost;
			
		} else {
			
			express.disabled = false;
			express.parentNode.style.color ="";
			express.parentNode.style.textDecoration = "";
			totalCostMoney.textContent = 'Total: $'+ totalCost;
		}
		
		if (jsLibs.checked){
			
			
			totalCost += 100;
			node.disabled = true;
			node.parentNode.style.color ="gray";
			node.parentNode.style.textDecoration = "line-through";
			totalCostMoney.textContent = 'Total: $'+ totalCost;
			
		} else {
			
			node.disabled = false;
			node.parentNode.style.color ="";
			node.parentNode.style.textDecoration = "";
			totalCostMoney.textContent = 'Total: $'+ totalCost;
		}
		
		
		
		if (express.checked){
			
			
			totalCost += 100;
			jsFrameworks.disabled = true;
			jsFrameworks.parentNode.style.color ="gray";
			jsFrameworks.parentNode.style.textDecoration = "line-through";
			totalCostMoney.textContent = 'Total: $'+ totalCost;
			
		} else {
			
			jsFrameworks.disabled = false;
			jsFrameworks.parentNode.style.color ="";
			jsFrameworks.parentNode.style.textDecoration = "";
			totalCostMoney.textContent = 'Total: $'+ totalCost;
			
		}
		
		if (node.checked){
			
			
			totalCost += 100;
			jsLibs.disabled = true;
			jsLibs.parentNode.style.color ="gray";
			jsLibs.parentNode.style.textDecoration = "line-through";
			totalCostMoney.textContent = 'Total: $'+ totalCost;
			
			
		} else{
			
			jsLibs.disabled = false;
			jsLibs.parentNode.style.color ="";
			jsLibs.parentNode.style.textDecoration = "";
			totalCostMoney.textContent = 'Total: $'+ totalCost;
		}
		
		if (buildTools.checked){
			
			
			totalCost += 100;
			totalCostMoney.textContent = 'Total: $'+ totalCost;
			
		} else {
			
			totalCostMoney.textContent = 'Total: $'+ totalCost;
		}
		
		if (npm.checked){
			
			
			totalCost += 100;
			totalCostMoney.textContent = 'Total: $'+ totalCost;
			
		} else {
			
			totalCostMoney.textContent = 'Total: $'+ totalCost;
		}
		
		
	
			
		
		
		
		
	});
	

	
}
	
	





