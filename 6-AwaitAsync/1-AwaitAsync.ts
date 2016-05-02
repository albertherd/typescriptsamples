(function(){
    
    async function getFromServer(){
        let data = await getAjax();        
        console.log("done!");
    }
    
    function getAjax(){
        return new Promise(resolve => setTimeout(resolve, 5000));
    }
    
    getFromServer();
})();