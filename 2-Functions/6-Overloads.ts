(function(){
    function printDataDoesntWork(msg: string) : void{
        console.log("Printing string : " + msg);
    }
    
     function printDataDoesntWork(msg: boolean) : void{
        console.log("Printing boolean : " + msg);
    }
    
     function printDataDoesntWork(msg: number) : void{
        console.log("Printing number : " + msg);
    }
     
    printDataDoesntWork(42);  
    
    
    function printData(msg: string): void;
    function printData(msg: boolean): void;
    function printData(msg: number): void;
    
    function printData(msg: any) : void{
        if(typeof msg === 'string'){
            console.log("Printing string : " + msg);
        }
        else if(typeof msg === 'boolean'){
             console.log("Printing boolean : " + msg);
        }
        else if(typeof msg === 'number'){
            console.log("Printing number : " + msg);
        }
    }
    
    printData("bear two");
    printData(42);
    printData(true);    
    
    function overloadMethod(first:string) : string{
        return first;
    }
        
})();