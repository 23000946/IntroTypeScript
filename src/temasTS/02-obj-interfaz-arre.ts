//Existen los objetos, las interfaces y los arreglos
//Se pueden hacer objetos atraves de una clase, desde el momento que lo declaramos
interface Alumno{ //Las interface sirven para declarar las variables desde antes de dar una constante
    nombre:string,
    apellido:string,
    edad:number,
    email:string,
    nota?: number //El ? es para remarcar que es un campo opcional
}

const alum: Alumno = { //Aqui hacemos referencia a alumno que estan
    nombre:'Daniel',
    apellido:'Garcia',
    edad:21,
    email: 'hongosgamesv@gmail.com'
}

console.table(alum)

//Arreglos funcionan como en java y C#

let mascotas =['Perro','Gato','Serpiente']

console.log(mascotas)
mascotas[1] = "Novo Gato"//Ente corchetes y posicion para modificar, empieza en 0
console.log(mascotas)
mascotas.push('Loro')//push es para agregar
console.log(mascotas)
let tem:(number|string)[]=[]//Esta forma es para permitir solo numeros y letras
tem.push(11)
tem.push('Once')
console.log(tem)



