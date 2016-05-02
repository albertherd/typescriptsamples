(function(){
    interface ICollection<T> {
        count: number
        add: (item: T) => void;
        clear: () => void;
        contains: (item: T) => boolean;
        remove: (item: T) => void;
    }
    
    interface IList<T> extends ICollection<T>{
        indexOf: (item: T) => void
    }
    
    class List<T> implements IList<T>{        
        private arr: T[];
        constructor(){
            this.arr = [];
        }
        
        get count(): number{
            return this.arr.length || 0;
        }
        
        add(item: T){
            this.arr.push(item);
        }
        
        clear(){
            this.arr = [];
        }
        
        contains(item: T){
            return this.indexOf(item) > 0;
        }
        
        remove(item: T){
            let pos: number = this.arr.indexOf(item);
            if(pos < 0){
                return;
            }
            
            this.arr.splice(pos, 1);
        }
        
        indexOf(item: T){
            return this.arr.indexOf(item);
        }       
    }
    
    let stringList: List<string> = new List<string>();
    stringList.add("bear two");
    stringList.add("typescript");
    console.log("List contains the word typescript? " + stringList.contains("typescript"));
    console.log("The word typescript is found at position " + stringList.indexOf("typescript"));
    stringList.remove("typescript");
    console.log("List contains the word typescript? " + stringList.contains("typescript"));
    console.log("The word typescript is found at position " + stringList.indexOf("typescript"));
    
})();