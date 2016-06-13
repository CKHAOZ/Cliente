(function InitPerro() {
    var oPerro = new Perro();
    oPerro.Constructor('Toby');
})();

function Perro() {
    this.ContextoPerro;
    this.Nombre;
    this.Ladrido;

    this.Constructor = function  fnConstructor(nombre) {
        ContextoPerro = this;
        ContextoPerro.Nombre = nombre;
        ContextoPerro.Ladrido = 'Woof';
        
        ContextoPerro.Ladrar();
    }

    this.Ladrar = function fnLadrar() {
        console.log(ContextoPerro.Ladrido);       
    }
}