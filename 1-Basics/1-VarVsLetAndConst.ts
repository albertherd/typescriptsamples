function varVsLetConst(){
    if(true){
        var name = "Albert"
        let surname = "Herd"        
        const middleName = "Eric";
        middleName = "secret";
    }
    
    console.log(name);
    console.log(surname);
    console.log(middleName);
}