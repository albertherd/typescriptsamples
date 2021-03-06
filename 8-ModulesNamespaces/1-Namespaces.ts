namespace interfaces{
    export interface ICollection<T> {
        count: number
        add: (item: T) => void;
        clear: () => void;
        contains: (item: T) => boolean;
        remove: (item: T) => void;
    }
    
    export interface IList<T> extends ICollection<T>{
        indexOf: (item: T) => void
    }
    
    export interface IJson {
        toJSON: () => string;
    }
}

namespace classes{
    export class JsonAbleString implements interfaces.IJson{
        private str: string;
        constructor(str: string){
            this.str = str;
        }
        
        toJSON(): string{
            return JSON.stringify(this.str);
        }
    }
    
    export class List<T extends interfaces.IJson> implements interfaces.IList<T>{        
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
            let pos: number = this.indexOf(item)
            if(pos < 0){
                return;
            }
            
            this.arr.splice(pos, 1);
        }
        
        indexOf(item: T){
            return this.arr.indexOf(item);
        }       
    }
}
    
namespace main{       
    let stringList: classes.List<classes.JsonAbleString> = new classes.List<classes.JsonAbleString>();
    stringList.add(new classes.JsonAbleString("bear two"));
    stringList.add(new classes.JsonAbleString("typescript"));
    console.log("List contains the word typescript? " + stringList.contains(new classes.JsonAbleString("typescript")));
    console.log("The word typescript is found at position " + stringList.indexOf(new classes.JsonAbleString("typescript")));
    stringList.remove(new classes.JsonAbleString("typescript"));
    console.log("List contains the word typescript? " + stringList.contains(new classes.JsonAbleString("typescript")));
    console.log("The word typescript is found at position " + stringList.indexOf(new classes.JsonAbleString("typescript")));    
}    
 
