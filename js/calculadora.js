var n1=parseFloat(prompt("Digite o primeiro valor: "));
var n2=parseFloat(prompt("Digite o segundo valor: "));
var op=prompt("Escolha a operação a ser realizda (+ | - | * | / | %): ");

console.log('Valor 1: ' + n1);
console.log('Operação: ' + op);
console.log('Valor 2: ' + n2);

if(op=="+"){
    var resultado=n1+n2;
    alert('' + n1 + ' ' + op + ' ' + n2 + ' = ' + resultado + '.');
    console.log('O resultado dessa soma é: ' + resultado + '.');

} else if(op=="-"){
    var resultado=n1-n2;
    alert('' + n1 + ' ' + op + ' ' + n2 + ' = ' + resultado + '.');
    console.log('O resultado dessa subtração é: ' + resultado + '.');

} else if(op=="*"){
    var resultado=n1*n2;
    alert('' + n1 + ' ' + op + ' ' + n2 + ' = ' + resultado + '.');
    console.log('O resultado dessa multiplicação é: ' + resultado + '.');

} else if(op=="/"){
    var resultado=n1/n2;
    alert('' + n1 + ' ' + op + ' ' + n2 + ' = ' + resultado + '.');
    console.log('O resultado dessa divisão é: ' + resultado + '.');

} else if(op=="%"){
    var resultado=n1%n2;
    alert('' + n1 + ' ' + op + ' ' + n2 + ' = ' + resultado + '.');
    console.log('O resto dessa divisão é: ' + resultado + '.');
    
} else{
    alert('ERRO: Operação Inválida. Aperte F5.');
}