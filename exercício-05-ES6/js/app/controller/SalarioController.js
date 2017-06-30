class SalarioController{

    constructor(){

        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputSalario = $('#salario');
        this._inputPercentual = $('#percentual');

    }
    adiciona(event){
        event.preventDefault();
     
        let data = new Date(...this._inputData.value.split('-').map((item, indice) =>  item - indice % 2) );
        console.log(data);

        let salario = new Salario(data, this._inputSalario.value, this._inputPercentual.value);

        console.log(salario);
    }
}

/**
 *  Arrow Funtion
 * 
 *   let data = new Date(...this._inputData.value.split('-').map((item, indice) => {
                return item - indice % 2;
            }));

=============================================================================================================================
    quando se tem só uma instrução na arrow function podemos nos livra dos colchetes E NÃO PRECISA do return pq ela já faz
    let data = new Date(...this._inputData.value.split('-').map((item, indice) =>  item - indice % 2)
    );

    ------------------------
    Sem arrow function

         let data = new Date(...this._inputData.value.split('-').map(function(item, indice) {
                return item - indice % 2;
            }));
 * 
 */