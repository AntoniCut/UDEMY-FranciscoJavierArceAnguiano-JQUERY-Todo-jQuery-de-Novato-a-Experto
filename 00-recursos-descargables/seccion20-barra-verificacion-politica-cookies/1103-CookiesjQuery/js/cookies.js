$(function(){
	if (localStorage.controlcookie>0) {
		document.getElementById("galletas1").style.bottom = '-50px';
	}

	$("#aceptar").click(function(){
		localStorage.controlcookie = (localStorage.controlcookie || 0);
		localStorage.controlcookie++;
		galletas1.style.display = 'none';
	});
});