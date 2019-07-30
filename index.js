function clickou(t) {
	let v = document.getElementById('display').textContent
	if (parseInt(v) == 0)
		document.getElementById('display').textContent = t
	else
		document.getElementById('display').textContent += t
}

function calcular() {
	document.getElementById('display').textContent = eval(document.getElementById('display').textContent)
}

function limpar() {
	let v = document.getElementById('display').textContent
	v = v.substring(0, v.length - 1);
	if (v.length == 0)
		document.getElementById('display').textContent = 0
	else
		document.getElementById('display').textContent = v
}

function limparTudo() {
	document.getElementById('display').textContent = 0
}