
// Global variables

const nameField = document.getElementById('name');
const emailField = document.getElementById('mail');
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

jobother.style.display = "none";


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
	} else if (design.value=== 'heart js'){
		let colorSelect = '<option value="tomato">Tomato (I &#9829; JS shirt only)</option>';
		colorSelect += '<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>  ';
		colorSelect += '<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>';
		color.innerHTML = colorSelect;
		
	} else if (design.value === 'Select Theme'){
		
		
		let colorSelect = '<option value="tomato"><-- Select an option please</option>';
		
		color.innerHTML = colorSelect;
	
	
	
} else{}


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

/////// Payment Secition
var paymentMethod = document.getElementById('payment');
var paymentfieldset = document.querySelectorAll('fieldset');
var divspaymentfieldset = paymentfieldset[3].querySelectorAll('div');
var creditCard = divspaymentfieldset[0];
var paypal = divspaymentfieldset[4];
var bitcoin = divspaymentfieldset[5];

/*console.log(paymentfieldset);
console.log(divspaymentfieldset);*/
	
function paypalBitcoint(){
paypal.style.display = "none";
bitcoin.style.display = "none";
}

paypalBitcoint();




paymentMethod.addEventListener("change", payments);

function payments(){
	if(paymentMethod.value === 'paypal'){
		
		paypal.style.display = "";
		creditCard.style.display = "none";
		bitcoin.style.display = "none";
	}
	else if(paymentMethod.value === 'bitcoin'){
		
		bitcoin.style.display = "";
		paypal.style.display = "none";
		creditCard.style.display = "none";
	}
	else{
		creditCard.style.display = "";
		paypal.style.display = "none";
bitcoin.style.display = "none";
	}
}

var cvv = document.getElementById('cvv');
var ccNum = document.getElementById('cc-num');
var zipNum = document.getElementById('zip');



var form = document.querySelector('form');
var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;


let errorDisplay2 = document.querySelector('legend');
let newErrorDiv = document.createElement('div');
newErrorDiv.id = "errorBox";

errorDisplay2.appendChild(newErrorDiv);




form.addEventListener('submit', function(e){
	
	let errorDisplay = document.getElementById('errorBox');
	errorDisplay.innerHTML="";
	
	
	
	if(nameField.value === ""){
		console.log("name fied is empty");
		let errorWrapper = document.createElement("li");         
		let nameError = document.createTextNode("Please Enter your Name"); 
		
		errorWrapper.appendChild(nameError);
		errorDisplay.appendChild(errorWrapper);
		e.preventDefault();
	}
	
	 if (!emailFilter.test(emailField.value)) {
        let errorWrapper = document.createElement("li");
		 let nameError = document.createTextNode("Please enter a valid e-mail address.");         
		errorWrapper.appendChild(nameError);
		errorDisplay.appendChild(errorWrapper);
       e.preventDefault();
    } 
	
	
	
	
	
	if(paymentMethod.value === "credit card" || paymentMethod.value === "select_method"){
		
		if (cvv.value.length <= 2 || cvv.value.length >= 4 ||/^[0-9]+$/.test(cvv.value) === false) {
			console.log('Please enter a valid CVV Number');
			
			let errorWrapper = document.createElement("li");
		 let nameError = document.createTextNode("Please enter a valid CVV Number");         
		errorWrapper.appendChild(nameError);
		errorDisplay.appendChild(errorWrapper);
			 e.preventDefault();
			
		}
		
		if (zipNum.value.length <= 4 || zipNum.value.length >= 6 ||/^[0-9]+$/.test(zipNum.value) === false) {
			console.log('Please enter a valid zip Number');
			
			let errorWrapper = document.createElement("li");
		 let nameError = document.createTextNode("Please enter a valid ZIP Number.");         
		errorWrapper.appendChild(nameError);
		errorDisplay.appendChild(errorWrapper);
			 e.preventDefault();
			
			
		}
		if (ccNum.value.length <= 12 || ccNum.value.length >= 17 ||/^[0-9]+$/.test(ccNum.value) === false) {
			console.log('Please enter a valid CC Number');
			
			let errorWrapper = document.createElement("li");
		 let nameError = document.createTextNode("Please enter a valid CC address.");         
		errorWrapper.appendChild(nameError);
		errorDisplay.appendChild(errorWrapper);
			
			 e.preventDefault();
			
		}
		
		
	}
	
	
	if (mainConference.checked || jsFrameworks.checked || jsLibs.checked || express.checked || node.checked || buildTools.checked || npm.checked){
		return true;
	} else{
		console.log('please check at least 1');
		
		let errorWrapper = document.createElement("li");
		 let nameError = document.createTextNode("Please Choose at least 1 Activity");         
		errorWrapper.appendChild(nameError);
		errorDisplay.appendChild(errorWrapper);
		
		 e.preventDefault();
	}
	
	
	
	
	
});





