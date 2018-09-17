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