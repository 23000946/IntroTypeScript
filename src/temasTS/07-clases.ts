class Persona{
    nombre:string
    edad:number

    constructor(nombre:string, edad:number){
        this.nombre = nombre
        this.edad = edad
    }
    imprimir(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
    }
}

let persona:Persona

persona=new Persona('Homelo Chino',23)
persona.imprimir()
