(function(){
    
    async function getFromServer(){
        let data = await getAjax();        
        console.log("done!");
    }
    
    function getAjax(){
        return new Promise(resolve => setTimeout(() => resolve("Promised Data!"), 5000));
    }
    
    getFromServer();
})();