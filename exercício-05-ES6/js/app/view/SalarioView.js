class SalarioView {

    constructor(elemento){

        this._elemento = elemento;
    }

    _template(model){

        return `
        <table class="tabela">
            <thead>
                <th>Salário base</th>
                <th>Valor do aumento</th>
                <th>Novo Salário</th>
                <th>Data</th>
            </thead>
            <tbody>
                 ${model.salarios.map(n =>  `
                        
                        <tr>
                            <td>${n.salario}</td>
                            <td>${n.percentual}</td>
                            <td>${n.novoSalario}</td>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                        </tr>

                    `).join('')}     
            </tbody>
      </table>
        
        `
    }

    uptade(model){

        this._elemento.innerHTML = this._template(model);
    }
}


/**
 *   <table class="tabela">
        <thead>
                    <th>Salário base</th>
                    <th>Valor do aumento</th>
                    <th>Data</th>
                </thead>
                <tbody class="tbody">
                   
                </tbody>
      </table>

=================================
arro funtion normal
  ${model.salarios.map(n => {

                    return `
                        <tr>
                            <td>${n.salario}</td>
                            <td>${n.percentual}</td>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                        </tr>
                    `
                    }).join('')}     
 */