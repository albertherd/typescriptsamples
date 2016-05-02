(function(){
    class Duck extends SwimmingAnimal {
        constructor(name: string, race: string, public isWild: boolean){
            super(name, race, isWild);
            this.color = "White";
        }
        
        swim(){
            console.log("Cuff Cuff Cuff");
        }
    }

    let frank = new Duck("Frank", "Average Duck", true);
    console.log(Duck.hasLegs);
})();

abstract class SwimmingAnimal {
    name: string;
    
    private legs: number;
    protected color: string;
    
    get race(): string{
        return this.race;
    }
    
    set race(race:string){
        this.race = race;
    }
    constructor(name: string, race: string, public isWild: boolean){
        this.name = name;
        this.race = race;     
        this.legs = 4;
        this.color = "yellow";
    }
    
    abstract swim(): void;
    
    static hasLegs:boolean = true;
}
