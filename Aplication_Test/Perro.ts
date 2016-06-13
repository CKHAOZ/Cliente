/**
 * Perro
 */
class Perro {
    Nombre : string;
    constructor(public nombre : string ) {
        this.Nombre = nombre;
    }

    Ladrar(){
        console.log('Woof');
    }
}