class AnimalBase {
    peso = 10;
    nombre = "";
    apellido = "";
    nombreCompleto = "";
    añoNacimiento = 0;
    edad = 0;
    tipo = 1;

    constructor(nombre, apellido, añoNacimiento, tipo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreCompleto = nombre + "-" + apellido;
        this.añoNacimiento = añoNacimiento;
        this.edad = 2022 - añoNacimiento;
        this.tipo = tipo;
    }

    Hablar() {
        if (this.tipo == 1){
            console.log("muuuu");
        }else{
            console.log("guaguagua");
        }
    }
}

var animal1 = new AnimalBase("Lucas", "Jappert", 1989, 1);
animal1.Hablar();

var animal2 = new AnimalBase("Kevin", "Jappert", 2004, 2);
animal2.Hablar();

console.log(animal1);
console.log(animal2);
// console.log(animal1);
