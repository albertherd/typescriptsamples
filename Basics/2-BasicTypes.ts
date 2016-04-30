(function(){
    let isTypeScriptCool: boolean = true;
    let typeScriptCoolness: number = 9001;
    let defineTypeScript: string = "Very Cool";
    
    let unTypedString = "Oops I forgot the type of the variable!"
    unTypedString = 1;
    
    
    unTypedString = getTypeScriptCoolness();
    unTypedString = getTypeScriptDefintion();
    
    unTypedString = getTypeScriptCoolnessTyped();
    unTypedString = getTypeScriptDefintionTyped();   
})();


function getTypeScriptCoolness(){
    return 9001;   
}

function getTypeScriptCoolnessTyped() : number{
    return 9001;   
}

function getTypeScriptDefintion(){
    return "Very Cool";
}

function getTypeScriptDefintionTyped() :string{
    return "Very Cool";
}