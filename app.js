const age = parseInt(prompt("How old are you?"));


if(isNaN(age) || age < 0){
    console.log("please write a positive number");
    /// condition == trye --> excute the code
} else if (age < 18){
    console.log("You are too young.");
    /// condition == false --> excute the code
} else if (age >= 18 && age <=50){
    console.log("you can drink");
    /// condition == false --> excute the code
} else if (age >= 50 && age <=80){
    console.log("you can drink, but please drink less");
    /// condition == false --> excute the code
} else if (age > 80){
    console.log("do exercise");
    /// condition == false --> excute the code
}