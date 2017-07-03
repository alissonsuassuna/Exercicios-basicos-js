class Salario {

    constructor(data, salario, percentual){

        this._data = new Date(data.getTime());
        this._salario = salario;
        this._percentual = percentual;

        Object.freeze(this);
    }

    get novoSalario(){

        return this._salario + (this._salario * this._percentual / 100);
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get salario(){
        return this._salario;
    }

    get percentual(){
        return  this._percentual;
    }

}