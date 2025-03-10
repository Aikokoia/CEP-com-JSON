/*const carro = {         // Objeto chamado carro
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001,
}

let texto = JSON.stringify(carro); //transformou o objeto carro em um texto que pudesse ser lido.

document.getElementById('área').innerHTML = texto; // aqui eu peguei uma área em que separei e joguei o objeto transformado em string utilizando JSON fazendo com que agora pudesse ser lido pelo HTML;

let obj = JSON.parse(texto);// transformou o texto em objeto

console.log(obj.modelo);*/

function buscarCEP(){
    let input = document.getElementById("CEP").value;
    const ajax = new XMLHttpRequest();
        ajax.open('GET','https://viacep.com.br/ws/' +input+ '/json/');
        ajax.send();
    ajax.onload = function(){
    document.getElementById('área').innerHTML = this.responseText;

    let obj = JSON.parse(this.responseText);//texto em objeto
    let rua = obj.logradouro;
    let bairro = obj.bairro;
    let cidade = obj.localidade 
    //valores requeridos 

    document.getElementById('área').innerHTML = 
    `Rua:${rua} <br>
     Bairro: ${bairro} <br>
     Cidade: ${cidade}`
}
}   
