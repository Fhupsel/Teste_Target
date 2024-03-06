// Fibonacci
function gerarFibonacci(num){
  fibonacci= Array(num);
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for(let i=2; i<=num; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  if(fibonacci.includes(num)){
    console.log(`${num} pertence a sequência de Fibonacci`)
  }
  else{
    console.log(`${num} não pertence a sequência de Fibonacci`)
  }
  console.log(fibonacci)
}

// Reverse String
function inverterString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str.charAt(i))
    reversedStr += str[i];
  }
  return reversedStr;
}
