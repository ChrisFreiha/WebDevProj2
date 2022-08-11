function testLength(value, length) {
	if (value.length == length) {
		return true;
	}
	else {
		return false;
	}
}

function testNumber(value) {
	if (isNaN(value)) {
		return false;
	}
	else {
		return true;
	}
}

function validateControl(control,name, length) { 
	let res; 
	if ( (testLength(control.value, length)) && (testNumber(control.value)) ) {
		res = true;
	}
	
	else { 
		alert("Error! Invalid zip code or cvc.");
		res = false;
	}
	return res;
}

function validateCreditCard(value) {
	let res;
	let re1 = /^3([0-9]{14})$/; 
        let re2 = /^4([0-9]{15})$/; 
        let re3 = /^5([0-9]{15})$/; 
        let re4 = /^6([0-9]{15})$/; 
	
	value = value.replace(/\s/, "");
	
	if (testNumber(value)) {
		res = true;
	}
	else {
                alert("Error! Invalid card number. Must be numbers.");
		res = false;
	}

	let val = (cardnum.value);
	switch (val) {
		case val  :
			if ( (testLength(value, 15)) && (re1.test(value)) ) {
				return true;
			}
			else if ( (testLength(value, 16)) && (re2.test(value)) ) {
                                return true;
                        }
			else if ( (testLength(value, 16)) && (re3.test(value)) ) {
                                return true;
                        }
			else if ( (testLength(value, 16)) && (re4.test(value)) ) {
                                return true;
                        }

			else {
				alert("Error! Invalid credit card number.");
				return false;
			} 
			break;
		default:
			alert("Error. Invalid credit card.");
			return false;
	}
}

function validateDate(value) {
        let formDate = new Date(value);
	let currentDate = new Date();
        if (formDate.value < currentDate) {
                alert("Error! Invalid date.");
                return false;
        }
        else {
                return true;
        }
}


function validateEmail(value) {
	let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
	if (re.test(value)) {
		return true;
	}
	else {
		alert("Invalid email address.");
		return false;
	}
}

function validateState(value) {
        let state = document.getElementById("state");
        if (state.value == "none") {
                return false;
        }
        return true;
}

function validateForm() {
	let zip = document.getElementById("zip");
	let email = document.getElementById("email");
	let cardnum = document.getElementById("cardnum");
	let cvc = document.getElementById("cvc");
	let state = document.getElementById("state");
	let expdate = document.getElementById("expdate");

	
	if ( (validateControl(zip, "zip", 5)) && (validateEmail(email.value)) && (validateCreditCard(cardnum.value)) 
		&& (validateControl(cvc, "cvc", 3)) && (validateState(state.selectedIndex)) && (validateDate(expdate.value)) ) { 

		alert("Payment Submitted!");
		return true;
	}
	else {
		alert("Payment Failed!");
		return false;
	}
	return false;
}






