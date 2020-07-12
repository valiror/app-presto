
// prime and even number code
function some(num){
  if(num % 2 == 0)
      return "even";
  return "odd";
}
some(4);
function some(num) {
if (num <= 1) return false; 
if (num % 2 == 0 && num > 2) return false; 
let s = Math.sqrt(num); 
for(let i = 3; i <= s; i++) { 
if(num % i === 0) return false; 
}
return true;
}
some(4);
  

// fibonacci number code. 

  fib = function(nMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<nMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
    }
    console.log(fibArray);
}

fib(10)

// fibonacci number code. 
function arrayFun(ar) {
  for (let i = ar.length-1; i >= 0; i--) { 
    for (let j = i; j >= 0; j--) {
      if (ar[i] < ar[j]) {
        let temp = ar[i];
        ar[i] = ar[j];
        ar[j] = temp;
      };
    };
  };
  return arr;
};
console.log(arrayFun([10,9,1000,12,-11,3]));
  