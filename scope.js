//var is a global variable it can be access anywhere whatever you want 

function sum(x, y) {
    const result = x + y;

    if (result > 1) {
        let mood = "happy"; //let and const are scope variable 
        console.log(mood);
    }
    return result;
}
//console.log(result); //it can't be access cause result is a const variable 
console.log(sum(1, 2));