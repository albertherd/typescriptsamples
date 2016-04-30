(function(){
    function greetPeopleNative(dummy){
        var people = Array.prototype.slice.apply(arguments);
        console.log(people.join(","));
    }
    
    function greetPeopleRestParams(...people: string[]){
        console.log(people.join(","));
    }
    
    greetPeopleNative(["Albert", "The", "Great"]);
    greetPeopleRestParams("Albert", "The", "Great");
})();