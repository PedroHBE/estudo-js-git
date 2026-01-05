// rodar apenas numeros impares em uma coluna e pares em outra

{console.log (1)
    console.log (3)
    console.log (5)
    console.log (7)
    console.log (9)
}
{console.log (2)
    console.log (4)
    console.log (6)
    console.log (8)
    console.log (10)
}

//FORMA ALTERNATIVA

let pares = []
let impares = []

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
    pares.push(i);
    } else {
        impares.push (i)
    }
}

console.log ("numeros pares:", pares)
console.log ("numeros impares:", impares)