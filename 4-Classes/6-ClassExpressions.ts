(function(){
    var duck = class{
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
    
    var parrot = class extends class { name: string } {
        color: string;
    }

    let frank = new duck("Frank", "Average Duck", true);
    let fredu = new parrot();
    fredu.name = "fredu";
    fredu.color = "blue";

})();