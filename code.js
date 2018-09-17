//adding empty file, first commit   
//Trying to save before i send

//writing some functions

var Person = function(name)
{
    this.name = name;
}

Person.prototype.sayHello = function()
{
    console.log('My name is ' + this.name);
}

var bill = new Person('Bill');
bill.sayHello();

// adding stuff in a new branch called addingone
// trying some math functions..


console.log("tst..");

function fifths(n)
{
    var x;
    if (n > 0 && n <= 100)
    {
        x = Math.floor(n / 20);
    }
    else
    {
        x = "Incorrent value, input btw 0 and 100..";
    }
    return x;
}

var x = fifths(405);
console.log(x);