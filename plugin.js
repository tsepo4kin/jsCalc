let arrayNumbers = [];
let one = document.querySelector('.b1');
let two = document.querySelector('.b2');
let three = document.querySelector('.b3');
let four = document.querySelector('.b4');
let five = document.querySelector('.b5');
let six = document.querySelector('.b6');
let seven = document.querySelector('.b7');
let eight = document.querySelector('.b8');
let nine = document.querySelector('.b9');
let zero = document.querySelector('.b0');
let equally = document.querySelector('.bequally');
let dot = document.querySelector('.bDot');
let clear = document.querySelector('.bc');
let plusMinus = document.querySelector('.plusMinus');
let persent = document.querySelector('.bPer');
let division = document.querySelector('.bDiv');
let multyply = document.querySelector('.bMulty');
let minus = document.querySelector('.bMin');
let plus = document.querySelector('.bPl');
let pl = 0;
let min = 0;
let div = 0;
let mul = 0;

let firstValue = 0;
let secondValue = 0;

function ecul() {
	secondValue = Number(document.getElementById('window').innerHTML);

	if(pl == 1) {
		document.getElementById('window').innerHTML = firstValue + secondValue;
		pl = 0;
		firstValue = Number(document.getElementById('window').innerHTML);
	}

	if(min == 1) {
		document.getElementById('window').innerHTML = firstValue - secondValue;
		min = 0;
		firstValue = Number(document.getElementById('window').innerHTML);	}

	if(div == 1) {
		document.getElementById('window').innerHTML = firstValue / secondValue;
		div = 0;
		firstValue = Number(document.getElementById('window').innerHTML);
	}

	if(mul == 1) {
		document.getElementById('window').innerHTML = firstValue * secondValue;
		mul = 0;
		firstValue = Number(document.getElementById('window').innerHTML);
	}

	plus.classList.remove('confirmed');
	minus.classList.remove('confirmed');
	division.classList.remove('confirmed');
	multyply.classList.remove('confirmed');
	secondValue = 0;
}


zero.addEventListener('click', function addZero () {
	document.getElementById('window').innerHTML += 0;
}, false)

one.addEventListener('click', function addOne () {
	document.getElementById('window').innerHTML += 1;
}, false)

two.addEventListener('click', function addTwo () {
	document.getElementById('window').innerHTML += 2;
}, false)

three.addEventListener('click', function addThree () {
	document.getElementById('window').innerHTML += 3;
}, false)

four.addEventListener('click', function addFour () {
	document.getElementById('window').innerHTML += 4;
}, false)

five.addEventListener('click', function addFive () {
	document.getElementById('window').innerHTML += 5;
}, false)

six.addEventListener('click', function addSix () {
	document.getElementById('window').innerHTML += 6;
}, false);

seven.addEventListener('click', function addSeven () {
	document.getElementById('window').innerHTML += 7;
}, false)

eight.addEventListener('click', function addEight () {
	document.getElementById('window').innerHTML += 8;
}, false)

nine.addEventListener('click', function addNine () {
	document.getElementById('window').innerHTML += 9;
}, false)

dot.addEventListener('click', function addDot () {
	document.getElementById('window').innerHTML += '.'
}, false)

clear.addEventListener('click', e => {
	document.getElementById('window').innerHTML = '';
	pl = 0;
	min = 0;
	div = 0;
	mul = 0;
	plus.classList.remove('confirmed');
	minus.classList.remove('confirmed');
	division.classList.remove('confirmed');
	multyply.classList.remove('confirmed');
}, false)


plusMinus.addEventListener('click', e=> {
	let value = document.getElementById('window').innerHTML;
	if(value[0] != '-' && plus != 0) {
		document.getElementById('window').innerHTML = '-' + document.getElementById('window').innerHTML;
	}
	else {
		document.getElementById('window').innerHTML = '';
		for(let i = 1; i < value.length; i++){
			document.getElementById('window').innerHTML +=value[i];
		}
		plus = 1;
	}
}, false)

persent.addEventListener('click', e => {
	if(!document.getElementById('window').innerHTML) return;
	else{
		document.getElementById('window').innerHTML = Number(document.getElementById('window').innerHTML) / 100;
	}
}, false)

division.addEventListener('click', e => {
	if(firstValue == 0 && document.getElementById('window').innerHTML =='') return;
	if(div != 0) return;
	if(pl == 1 || mul == 1 || min == 1) {
		pl = 0;
		mul = 0;
		min = 0;
		plus.classList.remove('confirmed');
		minus.classList.remove('confirmed');
		division.classList.remove('confirmed');
		multyply.classList.remove('confirmed');
		document.getElementById('window').innerHTML = '';
		div = 1;
		division.classList.add('confirmed');
	}
	else {
		firstValue = Number(document.getElementById('window').innerHTML);
		document.getElementById('window').innerHTML = '';
		div = 1;
		division.classList.add('confirmed');
	}
}, false)

multyply.addEventListener('click', e => {
	if(firstValue == 0 && document.getElementById('window').innerHTML =='') return;
	if(mul != 0) return;
	if(pl == 1 || div == 1 || min == 1) {
		pl = 0;
		div = 0;
		min = 0;
		plus.classList.remove('confirmed');
		minus.classList.remove('confirmed');
		division.classList.remove('confirmed');
		multyply.classList.remove('confirmed');
		document.getElementById('window').innerHTML = '';
		mul = 1;
		multyply.classList.add('confirmed');
	}
	else {
		firstValue = Number(document.getElementById('window').innerHTML);
		document.getElementById('window').innerHTML = '';
		mul = 1;
		multyply.classList.add('confirmed');
	}
}, false)

minus.addEventListener('click', e => {
	if(firstValue == 0 && document.getElementById('window').innerHTML =='') return;
	if(min != 0) return;
	if(pl == 1 || div == 1 || mul == 1) {
		pl = 0;
		mul = 0;
		div = 0;
		plus.classList.remove('confirmed');
		minus.classList.remove('confirmed');
		division.classList.remove('confirmed');
		multyply.classList.remove('confirmed');
		document.getElementById('window').innerHTML = '';
		min = 1;
		minus.classList.add('confirmed');
	}
	else {
		firstValue = Number(document.getElementById('window').innerHTML);
		document.getElementById('window').innerHTML = '';
		min = 1;
		minus.classList.add('confirmed');
	}
}, false);

plus.addEventListener('click', e => {
	if(firstValue == 0 && document.getElementById('window').innerHTML =='') return;
	if(pl != 0) return;
	if (mul == 1 || div == 1 || min == 1) {
		div = 0;
		mul = 0;
		min = 0;
		plus.classList.remove('confirmed');
		minus.classList.remove('confirmed');
		division.classList.remove('confirmed');
		multyply.classList.remove('confirmed');
		document.getElementById('window').innerHTML = '';
		pl = 1;
		plus.classList.add('confirmed');
	}
	else {
		firstValue = Number(document.getElementById('window').innerHTML);
		document.getElementById('window').innerHTML = '';
		pl = 1;
		plus.classList.add('confirmed');
	}
}, false)

equally.addEventListener('click', ecul, false)

document.onkeydown = function(e){
	if(e.keyCode == 8){
		let newStr = '';
		let str = document.getElementById('window').innerHTML;
		for(let i = 0; i < str.length - 1; i++){
			newStr += str[i];
		}
		document.getElementById('window').innerHTML = newStr;
	}

	if(e.keyCode == 96 || e.keyCode == 48){
		document.getElementById('window').innerHTML += 0;
	}

	if(e.keyCode == 97 || e.keyCode == 49){
		document.getElementById('window').innerHTML += 1;
	}

	if(e.keyCode == 98 || e.keyCode == 50){
		document.getElementById('window').innerHTML += 2;
	}

	if(e.keyCode == 99 || e.keyCode == 51){
		document.getElementById('window').innerHTML += 3;
	}

	if(e.keyCode == 100 || e.keyCode == 52){
		document.getElementById('window').innerHTML += 4;
	}

	if(e.keyCode == 101 || e.keyCode == 53){
		document.getElementById('window').innerHTML += 5;
	}

	if(e.keyCode == 102 || e.keyCode == 54){
		document.getElementById('window').innerHTML += 6;
	}

	if(e.keyCode == 103 || e.keyCode == 55){
		document.getElementById('window').innerHTML += 7;
	}

	if(e.keyCode == 104 || e.keyCode == 56){
		document.getElementById('window').innerHTML += 8;
	}

	if(e.keyCode == 105 || e.keyCode == 57){
		document.getElementById('window').innerHTML += 9;
	}

	if(e.keyCode == 110 || e.keyCode == 191 || e.keyCode == 190){
		if(document.getElementById('window').innerHTML == '' || document.getElementById('window').innerHTML == '.') return;
		document.getElementById('window').innerHTML += '.';
	}

	if(e.keyCode == 13) {
		e.preventDefault();
		ecul();
	}

	if(e.keyCode == 46){
		document.getElementById('window').innerHTML = '';
		pl = 0;
		min = 0;
		div = 0;
		mul = 0;
		plus.classList.remove('confirmed');
		minus.classList.remove('confirmed');
		division.classList.remove('confirmed');
		multyply.classList.remove('confirmed');
	}

	if(e.keyCode == 90 || e.keyCode == 107) {
		if(firstValue == 0 && document.getElementById('window').innerHTML =='') return;
		if(pl != 0) return;
		if (mul == 1 || div == 1 || min == 1) {
			div = 0;
			mul = 0;
			min = 0;
			plus.classList.remove('confirmed');
			minus.classList.remove('confirmed');
			division.classList.remove('confirmed');
			multyply.classList.remove('confirmed');
			document.getElementById('window').innerHTML = '';
			pl = 1;
			plus.classList.add('confirmed');
		}
		else {
			firstValue = Number(document.getElementById('window').innerHTML);
			document.getElementById('window').innerHTML = '';
			pl = 1;
			plus.classList.add('confirmed');
		}
	}

	if(e.keyCode == 88 || e.keyCode == 109){
		if(firstValue == 0 && document.getElementById('window').innerHTML =='') return;
		if(min != 0) return;
		if(pl == 1 || div == 1 || mul == 1) {
			pl = 0;
			mul = 0;
			div = 0;
			plus.classList.remove('confirmed');
			minus.classList.remove('confirmed');
			division.classList.remove('confirmed');
			multyply.classList.remove('confirmed');
			document.getElementById('window').innerHTML = '';
			min = 1;
			minus.classList.add('confirmed');
		}
		else {
			firstValue = Number(document.getElementById('window').innerHTML);
			document.getElementById('window').innerHTML = '';
			min = 1;
			minus.classList.add('confirmed');
		}
	}

	if(e.keyCode == 67 || e.keyCode == 106){
		if(firstValue == 0 && document.getElementById('window').innerHTML =='') return;
		if(mul != 0 ) return;
		if(pl == 1 || div == 1 || min == 1) {
			pl = 0;
			div = 0;
			min = 0;
			plus.classList.remove('confirmed');
			minus.classList.remove('confirmed');
			division.classList.remove('confirmed');
			multyply.classList.remove('confirmed');
			document.getElementById('window').innerHTML = '';
			mul = 1;
			multyply.classList.add('confirmed');
		}
		else {
			firstValue = Number(document.getElementById('window').innerHTML);
			document.getElementById('window').innerHTML = '';
			mul = 1;
			multyply.classList.add('confirmed');
		}
	}

	if(e.keyCode == 111 || e.keyCode == 86) {
		if(firstValue == 0 && document.getElementById('window').innerHTML =='') return;
		if(div != 0) return;
		if(pl == 1 || mul == 1 || min == 1) {
			pl = 0;
			mul = 0;
			min = 0;
			plus.classList.remove('confirmed');
			minus.classList.remove('confirmed');
			division.classList.remove('confirmed');
			multyply.classList.remove('confirmed');
			document.getElementById('window').innerHTML = '';
			div = 1;
			division.classList.add('confirmed');
		}
		else {
			firstValue = Number(document.getElementById('window').innerHTML);
			document.getElementById('window').innerHTML = '';
			div = 1;
			division.classList.add('confirmed');
		}
	}
}