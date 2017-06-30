document.querySelector('#form').addEventListener('submit', function(event){
    event.preventDefault();

    let form = document.querySelector('#form');
    let salarioBase = parseInt(form.salario.value);
    let reajuste = salarioBase * 0.25;
    let novoSalario = salarioBase + reajuste;

    let tbody = document.querySelector('.tbody');
    let tr = document.createElement('tr');

    let tdSalBase = document.createElement('td');
    let tdReajuste = document.createElement('td');
    let tdNovoSal = document.createElement('td');

    tdSalBase.textContent = salarioBase.toFixed(2);
    tdReajuste.textContent = reajuste.toFixed(2);
    tdNovoSal.textContent = novoSalario.toFixed(2);

    tr.appendChild(tdSalBase);
    tr.appendChild(tdReajuste);
    tr.appendChild(tdNovoSal);

    tbody.appendChild(tr);
});

/*
Refatorando esse código com as functin 

document.querySelector('#form').addEventListener('submit', function(event){
    event.preventDefault();
    
    let form = document.querySelector('#form');

    let salario = obtemSalarioDoFormulario(form);

    addSaldoNaTabela(salario);
});

function obtemSalarioDoFormulario(form){

    let dado = parseFloat(form.salario.value);
    let dadoReajuste = dado * 0.25;
    let novoSal = dado + dadoReajuste;

    let salario = {
        salario: dado,
        reajuste: dadoReajuste,
        novo: novoSal
    }

    return salario;
}

function addSaldoNaTabela(salario){
    let salarioTr = montaTr(salario);
    let tbody = document.querySelector('.tbody');
    tbody.appendChild(salarioTr);
}

function montaTr(salarioTr){
    let tr = document.createElement('tr');

    tr.appendChild(montaTd(salarioTr.salario));
    tr.appendChild(montaTd(salarioTr.reajuste));
    tr.appendChild(montaTd(salarioTr.novo));

    return tr;
}

function montaTd(dadoTd){
    let td = document.createElement('td');
    td.textContent = dadoTd;

    return td;
}


 */


