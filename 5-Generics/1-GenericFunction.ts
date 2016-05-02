(function(){
    let numbers : [number] = [1,2,3,4,5];
    let strings : [string] = ["one", "two", "three", "four", "five"];
    
    function firstOrDefault<T>(arr: [T]) : T{
        if(!arr || arr.length == 0){
            return null;
        }        
        return arr[0];        
    }
    
    let number : number = firstOrDefault(numbers);
    let string : string = firstOrDefault(strings);
   
    let numberToString : number = firstOrDefault(strings);
    let stringToNumber : string = firstOrDefault(numbers);
 
})();