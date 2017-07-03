class ListaSalario {

    constructor(){

        this._salarios = [];
    }

    adiciona(salario){

        this._salarios.push(salario);
    }

    get salarios(){

        return [].concat(this._salarios);
    }
}