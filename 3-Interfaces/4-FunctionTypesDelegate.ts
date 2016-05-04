(function(){
    interface IGreet{
        (name:string, surname: string, age:number) : string;
    }
        
    function greetAfterFiveSeconds(greet: IGreet){
        setInterval(console.log(greet("Albert", "Herd", 25)), 100);
    }  

    greetAfterFiveSeconds((name, surname, age) => "Hi! Your name is " + name + " " + surname + " and you are " + age + " years old!");
})();