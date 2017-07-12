class Salario {

    constructor(salario, data){
        this._salario = salario;
        this._data = new Date(data.getTime());
        Object.freeze(this);
    }
    
    get data(){
        return new Date(this._data.getTime());
    }

    get salario(){
        return this._salario;
    }

    get salarioGratificacao(){
     
       return this._salario + (this._salario * 5/100);
    }
    
    get salarioImposto(){
        return this.salarioGratificacao  * 7/100;
    }

    get novoSalario(){
        return this.salarioGratificacao - this.salarioImposto;
    }
}