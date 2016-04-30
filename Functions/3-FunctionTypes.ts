(function(){
    function greet(name : string, surname: string, age: number): string{
        return "Hi! Your name is " + name + " " + surname + " and you are " + age + " years old!";
    }
    
    let greetFunc: (name:string, surname: string, age:number) => string;
    greetFunc = greet;
    
    let resultGreeting  = greetFunc("Albert", "Herd", 24);
    greetFunc = (name:string, surname: string, age:number) => { return name + " " + surname + ": " + age };
    resultGreeting  = greetFunc("Albert", "Herd", 24);
    
})();