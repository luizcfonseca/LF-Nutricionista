var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  	var pacientes = document.querySelectorAll(".paciente");

  	if (this.value.length > 0) {

	    for (var i = 0; i < pacientes.length; i++) {
	        var paciente  = pacientes[i];
	        var tdNome    = paciente.querySelector(".info-nome");
	        var nome      = tdNome.textContent;
	        var expressao = new RegExp(this.value,"i"); // "i" indica que não é case sensitive.

	        //if (nome != this.value) { // primeira versao que filtrava somente o nome igual
	        if (!expressao.test(nome)) {	         // esconde as linhas diferente do que foi digitado
	        	paciente.classList.add("invisivel");
	        }else {
	        	paciente.classList.remove("invisivel");
	        }
	    }
  	}else {
  		for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
	}
});