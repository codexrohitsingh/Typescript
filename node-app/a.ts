// Problem 1 : Write a function that greets the user given there first name
function Greeting(firstName:String){
console.log("Hello " + firstName)
}

Greeting("Rohit")

// Problem 2 : Write a function that calculates the sum of two function 
function Sum(a:number, b:number):number{
    return a+b;
}

console.log(Sum(4,5));

// Problem 3 : Return true or false based on use is 18 plus or not

function isLegal(age:number):boolean{
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLegal(18));

// Problem 4: Create a function that takes another function as input and runs it after 1 second

function Run(a:Function){
    setTimeout(a,1000);

}
Run(Greeting);