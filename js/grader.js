function gradeResult(){
	var myResult = parseInt(document.getElementById("value1").value);
	var grade;
	if (!myResult){
		alert("please enter a result");
	}
	else{
		if (myResult > 90) {
			grade = 'A':
	} else if (myResult > 80){
		grade = 'B';
	}else {grade = 'F';
	}
	var message = 'your result of' + myResult + ' gets you a grade' + grade;
	console.log(message);
	document.getElementById("resultsentence").innerHTML - message;
	}
}