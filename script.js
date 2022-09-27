let numberOne;
let numberTwo;

numberOne = Number(prompt('Digite o primeiro numero:'));
numberTwo = Number(prompt('Digite o segundo numero:'));

function sum(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function mult(n1, n2) {
    return n1 * n2;
}
function div(n1, n2) {
    return n1 / n2;
}
function rest(n1, n2) {
    return n1 % n2;
}
function evenOrOdd (n1, n2){
    let sumResult = sum(n1, n2);
    let resResult= rest(n1, n2);
    if(resResult != 0){
        return `A soma dos dois numeros é Impar: ${sumResult}`;
    }else {
        return `A soma dos dois numeros é par: ${sumResult}`;
    }
}

function equals(n1, n2){
    if(n1 == n2){
        return `Os numeros inseridos sao iguais`;
    }else{
        return `Os numeros inseridos sao diferentes`;
    }
}

alert(`A soma entre os dois numeros: ${sum(numberOne, numberTwo)}`);
alert(`A subtração entre os dois numeros: ${sub(numberOne, numberTwo)}`);
alert(`A multiplicação entre os dois numeros: ${mult(numberOne, numberTwo)}`);
alert(`A Divição entre os dois numeros: ${div(numberOne, numberTwo)}`);
alert(`O resto da divisão entre os dois numeros: ${rest(numberOne, numberTwo)}`);
alert(evenOrOdd(numberOne, numberTwo));
alert(equals(numberOne, numberTwo));