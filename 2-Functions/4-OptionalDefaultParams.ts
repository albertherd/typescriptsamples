(function(){    
    function getVeryRandomNumber(): number{
        return 42;
    }
    
    function greet(name : string = "Albert", surname: string = "Herd", age?: number): string{
        if(age){
            return "Hi! Your name is " + name + " " + surname + " and you are " + age + " years old!";
        } else {
            return "Hi! Your name is " + name + " " + surname + " and you are quite old since you do not want to share your age!";
        }
    }
    
     function greetRandomAge(name : string = "Albert", surname: string = "Herd", age: number = getVeryRandomNumber()): string{
        if(age){
            return "Hi! Your name is " + name + " " + surname + " and you are " + age + " years old!";
        } else {
            return "Hi! Your name is " + name + " " + surname + " and you are quite old since you do not want to share your age!";
        }
    }
    
    console.log(greet("Bert", "Sport", 24));
    console.log(greet("Alberto", "Pizza", 24));
    console.log(greet());
})();