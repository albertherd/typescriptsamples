(function(){
    var people = [
      { name:"Albert", surname: "Herd", age:25},
      { name:"John", surname: "Doe", age: 28},
      { name:"Mister", surname: "Kunjom", age:50}  
    ];
    
    let youngPeople = people.filter(function(person){
        return person.age <= 30;
    });
    
    let youngPeopleArrowFunction = people.filter(person => person.age <= 30);
    
    people.filter(() => true);
    people.filter(person => person.age <= 30);
    people.filter((person, index, array) => index > 0);
    
    
    function printAlbertNameIntervalWithThis(){
        this.albert = people[0];
        setInterval(function () {
            console.log(this.albert);
        })
    } 
    
    function printAlbertNameIntervalWithSelf(){
        var self = this;
        self.albert = people[0];
        setInterval(function () {
            console.log(self.albert);
        })
    } 
    
    function printAlbertNameIntervalWithLambda(){
        this.albert = people[0];
        setInterval(() => console.log(this.albert));
    } 
    
})();