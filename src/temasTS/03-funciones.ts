function sumar(x:number,y:number,z:number=5):number{//ponerle void hace que no este definido fuera del function
    let a=6
    let b=7
    let res = a + b

console.log('La suma es: '+res)
return x + y + z
}

let resultado = sumar(3,2)//El 3 y el 2 hacen referencia a los numeros x y esto por que son los numeros que pide el return
console.log(resultado)

interface mascotas{
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrar:()=>void//esta es una funcion, el simbolo entre los parentecis y el void se llama flecha, al tener un void no regresa nada
}
const novoanimaldeestimacao:mascotas={
    nombre: 'Tadano',
    edad:4,
    raza:'Golden Retriever',
    sexo:'macho',
    vacunado: true,
    mostrar(){
        console.log(`La edad de ${this.nombre} es ${this.edad} años`)//`` esas comillas es para referenciar un dato que esta fuera del const, esta actividad es para hacer una funcion dentro de una interfaz 
    }//El this. es para hacer referencia a la propiedad dentro del subconjunto actual donde estas, si no quieres puedes poner nombre.variable
}// a este punto nos falta definir la funcion

function mostrarMascota(mascota:mascotas, x:number):void{
    mascota.edad+=x //Mascota.edad=Mascota.edad+x es lo mismo pero más compacto
    console.log(mascota)
    console.log(mascota.mostrar())
}

mostrarMascota(novoanimaldeestimacao,3)