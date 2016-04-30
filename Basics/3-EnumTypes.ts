(function(){
    let myCity: Cities = Cities.Fgura;
    let waterTemperature: WaterTemperature = WaterTemperature.Hot;
    let myCountry : Countries = Countries.Gozo;
    
    console.log(myCountry)
    
    console.log(Countries[myCountry]);
    
})();

enum Cities { Fgura, Paola, Marsa, Valletta };
enum WaterTemperature { Freezing = 0, Cold = 10, RoomTemperature = 25, Lukewarm = 35, Warm = 50, Hot = 70, Boiling = 90};
enum Countries { Malta = 10, Gozo, Kemmuna, Filfla, ZalzaIsland };