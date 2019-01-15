let arrayNumbers = [];
function addZero () {
	document.getElementById('window').innerHTML += 0;
}

function addOne () {
	document.getElementById('window').innerHTML += 1;
}

function addTwo () {
	document.getElementById('window').innerHTML += 2;
}

function addThree () {
	document.getElementById('window').innerHTML += 3;
}

function addFour () {
	document.getElementById('window').innerHTML += 4;
}

function addFive () {
	document.getElementById('window').innerHTML += 5;
}

function addSix () {
	document.getElementById('window').innerHTML += 6;
}

function addSeven () {
	document.getElementById('window').innerHTML += 7;
}

function addEight () {
	document.getElementById('window').innerHTML += 8;
}

function addNine () {
	document.getElementById('window').innerHTML += 9;
}

function addPlus () {
	if(oneAct() === 1) equally();
	if(oneCall() === 1) cclear();
	document.getElementById('window').innerHTML += '+';
}

function addMinus () {
	if(oneAct() === 1) equally();
	if(oneCall() === 1) cclear();
	document.getElementById('window').innerHTML += '-';
}

function addMultyply () {
	if(oneAct() === 1) equally();
	if(oneCall() === 1) cclear();
	document.getElementById('window').innerHTML += '*';
}

function addDel () {
	if(oneAct() === 1) equally();
	if(oneCall() === 1) cclear();
	document.getElementById('window').innerHTML += '/';
}

function cclearAll () {
	document.getElementById('window').innerHTML = ' ';
}

function addDot () {
	if(oneCall() === 1) return;
	document.getElementById('window').innerHTML += '.';
}


function cclear() {
	let yourData = document.getElementById('window').textContent;
	let yourDataStr = String(yourData);
	let res = '';
	for (let i = 0; i < yourDataStr.length - 1; i++) {
		res += yourDataStr[i];
	}
	document.getElementById('window').innerHTML = res;
}

function log() {
	let string = document.querySelector('.window').textContent
	console.log(string);
}

function oneCall() {
	let yourData = document.getElementById('window').textContent;
	let yourDataStr = String(yourData);
	if(yourDataStr[yourDataStr.length - 1] == '+' || yourDataStr[yourDataStr.length - 1] == '-' || yourDataStr[yourDataStr.length - 1] == '*' || yourDataStr[yourDataStr.length - 1] == '/' || yourDataStr[yourDataStr.length - 1] == ',') {
		return 1;
	}
	return 0;
}

function oneAct() {
	let yourData = document.getElementById('window').textContent;
	let yourDataStr = String(yourData);
	for(let i = 1; i < yourDataStr.length - 1; i++) {
		if(yourDataStr[i] == '+' || yourDataStr[i] == '-' || yourDataStr[i] == '*' || yourDataStr[i] == '/') return 1;	
	}
	return 0;	
}


function equally() {
	let yourData = document.getElementById('window').textContent;
	let yourDataStr = String(yourData);
	let firstNumber = '';
	let secondNumber = '';
	let secondNumberI = 0;
	for (let i = 0; i < yourDataStr.length; i++) {
		secondNumberI ++;
		if(yourDataStr[i] == '+' || yourDataStr[i] == '-' || yourDataStr[i] == '*' || yourDataStr[i] == '/') break;
		firstNumber += yourDataStr[i];
	}

	for (let i = secondNumberI; i < yourDataStr.length; i++) {
		secondNumber += yourDataStr[i];
	}
	let firstNumberNum = Number(firstNumber);
	let secondNumberNum = Number(secondNumber);
	let operator = yourDataStr[secondNumberI - 1];
	let result = 0;
	if(operator == '+') {
		result = firstNumberNum + secondNumberNum;
		document.getElementById('window').innerHTML = ' ';
		document.getElementById('window').innerHTML = result;
	} 

	if(operator == '-') {
		result = firstNumberNum - secondNumberNum;
		document.getElementById('window').innerHTML = ' ';
		document.getElementById('window').innerHTML = result;
	} 

	if(operator == '*') {
		result = firstNumberNum * secondNumberNum;
		document.getElementById('window').innerHTML = ' ';
		document.getElementById('window').innerHTML = result;
	} 

	if(operator == '/') {
		result = firstNumberNum / secondNumberNum;
		document.getElementById('window').innerHTML = ' ';
		document.getElementById('window').innerHTML = result;
	} 
}