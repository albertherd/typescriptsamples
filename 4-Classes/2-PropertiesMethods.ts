(function(){
    class Duck {
        name: string;
        
        get race(): string{
            return this.race;
        }
        
        set race(race:string){
            this.race = race;
        }
        constructor(name: string, race: string, public isWild: boolean){
            this.name = name;
            this.race = race;        
        }
    }

    let frank = new Duck("Frank", "Average Duck", true);

})();