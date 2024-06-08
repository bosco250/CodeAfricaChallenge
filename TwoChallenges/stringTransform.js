//prompt user to enter a string
let inputs=prompt("Enter String: ");
console.log("Entered String: "+inputs);
const stringLength=inputs.length;

// Perform both operations
if(stringLength%15==0){
  let result1=inputs.split("").reverse().join("");
  let lesult2="";
  for(let i=0; i<stringLength;i++){
    lesult2+=inputs.charCodeAt(i)+" ";
  }
  console.log("reversed string: "+result1);
  console.log("String ASII code: "+lesult2);
}

// Reverse the string
else if(stringLength%3==0){
  let result=inputs.split("").reverse().join("");
  console.log("Reversed String: "+result);
}

// Replace each character with its ASCII code
else if(stringLength%5==0) {
  let result="";
  for(let i=0;i<stringLength;i++){
    result+=inputs.charCodeAt(i)+" ";
  }
  console.log("String  ASCII code: "+result);
}