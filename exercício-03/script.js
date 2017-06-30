document.querySelector('#form').addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Olá deu tudo certo!');

    let form = document.querySelector('#form');

    let nota1 = parseFloat(form.nota1.value); 
    let nota2 = parseFloat(form.nota2.value);
    let nota3 = parseFloat(form.nota3.value);

    let peso1 = parseFloat(form.peso1.value);
    let peso2 = parseFloat(form.peso2.value);
    let peso3 = parseFloat(form.peso3.value);

    let notasMultiplicadasPorPeso = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
    
    let somaDosPeso = peso1 + peso2 + peso3;
   
    let mediaPonderada = notasMultiplicadasPorPeso / somaDosPeso;

    let div = document.querySelector('#mostrar');

    let mostarP = document.createElement('p');

    mostarP.textContent = mediaPonderada.toFixed(2);

    div.appendChild(mostarP);
});