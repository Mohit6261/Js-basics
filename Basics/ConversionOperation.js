let score="21";

console.log(typeof score);
console.log(typeof(score));
//both are same

//Now we get type of score is string 
//to cnvert it into number i will be Write Number
//in front of which value is to be convert(there is score)

let valueInNumber=Number(score);
console.log(valueInNumber);

//Now if store something like 21abc in score2 then what i will get

let score2="21abc";
let valueInScore2=Number(score2);
console.log(typeof(valueInScore2));
//It gives us number but how "21abc" can be number ,so lets print its value

console.log(valueInScore2);

//It shows NaN,means which a number but does not represent a valid number

//true=>1

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//gives us true

//and isLoggedIn=""==>false