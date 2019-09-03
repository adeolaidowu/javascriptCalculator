let myInput = document.querySelector('#input');

function select(htmlObj){
	let chosen = htmlObj.innerHTML;
	if(chosen == 'CE'){
		myInput.innerHTML = '0';

	} else if(chosen == '='){
		myInput.innerHTML = eval(myInput.innerHTML);
	} else{
		if(myInput.innerHTML == '0'){
			myInput.innerHTML = chosen;
		}else{
			myInput.innerHTML += chosen;
		}
	}
}