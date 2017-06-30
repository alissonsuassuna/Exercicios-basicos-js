document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    
    let form = document.querySelector('.form');

    let n1 = parseInt(form.n1.value);
    let n2 = parseInt(form.n2.value);
    let n3 = parseInt(form.n3.value);
    let n4 = parseInt(form.n4.value);

    let totalSoma = n1 + n2 + n3 +n4; // 3241 

    let mostraAoUsuario = document.querySelector('#mostrar');

    let mostraH2 = document.createElement('h2');

    mostraH2.textContent = 'A soma é ' +  totalSoma;

    mostraAoUsuario.appendChild(mostraH2);
});