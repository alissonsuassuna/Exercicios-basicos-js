class DateHelper {

    constructor(){

        throw new Error('DateHelper não pode ser instanciada');
    }

    static textoParaData(texto){

        return new Date(...texto.split('-').map((item, indice) =>  item - indice % 2));
    }

    static dataParaTexto(data){

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
        
       /* data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear(); */
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