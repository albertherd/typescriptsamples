(function(){
    interface IAnimal { 
        isWild: boolean;
        race: string;
        name? : string;
    }

    interface IWaterAnimal extends IAnimal{
        swim: (speed: number) => void;
    }

    interface IQuackingAnimal extends IAnimal{
        quack: (volume: number) => string;
        tauntOthers? : (taunt: string) => boolean;
    }

    interface IDuck extends IWaterAnimal, IQuackingAnimal{
        tauntOthers? : (taunt: string) => boolean;
    }

    function placeDuckInWater(duck: IDuck): void{
        if(duck.name){
            console.log("Placing " + duck.name + " in the water.");
        } else {
            if(duck.isWild){
                console.log("Placing a wild duck in the water.");
            } else {
                console.log("Placing a tame duck in the water.")
            }
        }
    }

    function adoptDuck(name: string): IDuck{
        return {
            isWild : false,
            race : "White Duck",
            name : name,
            quack : volume => ("Qucking at volume: " + volume),
            swim : speed => console.log("Swimming")
        };
    }

    function stealDuck() : IDuck {
        return {
            isWild : true,
            race : "White Duck",
            quack : volume => ("Qucking at volume: " + volume),
            swim : speed => console.log("Swimming")
        };
    }

    let frank: IDuck = adoptDuck("frank");
    let johnny = adoptDuck("joe");
    let unnamedDuck = stealDuck();

    placeDuckInWater(frank);
    placeDuckInWater(johnny);
    placeDuckInWater(unnamedDuck);
})();