let botao = document.querySelector('#btn-enviar');


botao.addEventListener('click', enviar);


function enviar(event){
    event.preventDefault();

    console.log("Deu certo s");

    let form = document.querySelector('#form');

    let nota1 = parseInt(form.nota1.value);
    let nota2 = parseInt(form.nota2.value);
    let nota3 = parseInt(form.nota3.value);

    // M = nota1 + nota2 + nota3 / n = 3

    let media = (nota1 + nota2 + nota3) / 3;

    console.log(media.toFixed(2));

    let div = document.querySelector('#mostrar');

    let p = document.createElement('p');

    p.textContent = 'A média entre as trés notas é: ' + media.toFixed(2);

    div.appendChild(p)

};

console.log(botao);