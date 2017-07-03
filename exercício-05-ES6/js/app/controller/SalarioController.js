class SalarioController{

    constructor(){

        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputSalario = $('#salario');
        this._inputPercentual = $('#percentual');

        this._listaSalarios = new ListaSalario();

        this._salarioView = new SalarioView($('#salarioView'));

        this._salarioView.uptade(this._listaSalarios);

    }
    adiciona(event){
        event.preventDefault();

        this._listaSalarios.adiciona(this._criaSalario());

        this._salarioView.uptade(this._listaSalarios);

        this._limpaFormulario();

        console.log(this._listaSalarios.salarios);
    }

    _criaSalario(){
        return new Salario(DateHelper.textoParaData(this._inputData.value), parseFloat(this._inputSalario.value), parseFloat(this._inputPercentual.value));

    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputPercentual.value = 0;
        this._inputSalario.value = 0

        this._inputData.focus();

    }
}
