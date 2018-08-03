var n=0;
function menu() {
	var x=document.getElementById('menu');
	var y=document.getElementById('c');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function slide() {
	  	setInterval(function(){
			if (n==4) {
				n=1;
			}else{
				n++;
			}
			if (n==1) {
				frase="Somos a empresa n° 1 do consumidor";
			}else if (n==2) {
				frase="Estamos fazendo o imprevisivel";
			}else if (n==3) {
				frase="Temos a escolha certa para vc";
			}else{
				frase="Que tal ficar 100%, mais tecnológico!";
			}
			document.getElementById("text").innerHTML=frase;
			document.getElementById("im").src = "img/im"+n+".jpg";
		}, 3000);
};