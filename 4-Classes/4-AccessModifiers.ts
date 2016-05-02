(function(){
    class Duck {
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
        
        static hasLegs:boolean = true;
    }
    
    class WhiteDuck extends Duck {
        constructor(name: string, race: string, public isWild: boolean){
            super(name, race, isWild);
            this.color = "White";
        }
    }

    let frank = new Duck("Frank", "Average Duck", true);
    console.log(frank.legs);
    console.log(frank.color);
    console.log(Duck.hasLegs);
    
    let martin = new WhiteDuck("Martin", "White Duck", true);
    console.log(martin.legs);
    console.log(martin.color);
})();