let nota = 5
let nota2 = 8
final(nota, 7);
final(nota2, 7);

function final(grade, minimum){
    if (grade >= minimum) {
        console.log('nota foi ' + grade +' = Passou')
    }else{
        console.log('nota foi ' + grade +' = Reprovado meu querido') 
    }
    
}

