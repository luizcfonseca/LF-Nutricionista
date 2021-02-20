var titulo = document.querySelector(".titulo");
titulo.textContent = "Luiz Fonseca Nutricionista";


//var paciente = document.querySelector("#primeiro-paciente");    // identificador inutilizado para usar o "for"

var pacientes = document.querySelectorAll(".paciente"); // será utilizado a classe para fazer o loop

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
	var tdPeso   = paciente.querySelector(".info-peso");              // classe
	var peso     = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura   = tdAltura.textContent;

	var tdImc    = paciente.querySelector(".info-imc");

	var pesoOk   = validaPeso(peso);
	var alturaOk = validaAltura(altura);

	
	if (!pesoOk) {
	    tdImc.textContent = "Peso inválido!";
	    pesoOk = false;
	    //paciente.style.color = "red";
 		paciente.classList.add("paciente-invalido");
	}

	if (!alturaOk) {
	    tdImc.textContent = "Altura inválida!";
	    alturaOk = false;
	    //paciente.style.color = "red";
	    //paciente.style.backgroundColor = "lightcoral";
	    paciente.classList.add("paciente-invalido");
	}

	// O operador lógico de E ( && )
	if (pesoOk && alturaOk) {
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}


}


function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}


// usando função nomeada
//titulo.addEventListener("click", mostraMensagem);
//function mostraMensagem(){
//    console.log("Olá eu fui clicado!");
//}
// usando funcao anonima
//titulo.addEventListener("click", function () {
//	console.log("Usando função anônima para mostra mensagem!");
//});


