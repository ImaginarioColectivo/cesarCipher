
function principal2(option){
	do{
		var respuesta = prompt("Bienvenida. Que deseas hacer? 1)Cifrar - 2)Descifrar");

		 if(respuesta != ""){
		 	if(respuesta == "1"){
		 		var string = prompt("Ingrese la palabra que desea cifrar");
		 		cipher(string);
		 		} else if (respuesta == "2"){
		 			var string = prompt("Ingrese la palabra que desea descifrar");
		 			decipher(string);
		 				}else{
		 					alert("Por favor, ingrese una opción válida");
		 }
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

function cipher(string){
	
		var cifrado = "";
		var ascii = 0;

		string = string.toUpperCase();

		for (var i=0; i<string.length; i++){
			ascii = string.charCodeAt(i);
			ascii = (ascii-65-7+26)+65;
			cifrado = cifrado + String.fromCharCode(ascii);
		}
			alert(cifrado);
		}
	
function decipher(string){

		var descifrado = "";
		var ascii = 0;

		string = string.toUpperCase();	

		for (var i=0; i<string.length; i++){
			ascii = string.charCodeAt(i);
			
			ascii = ((ascii-65-7+26)%26+65);
			descifrado = descifrado + String.fromCharCode(ascii);
		}
		string = string.toLowerCase();
		
			alert(descifrado);
}
principal2();