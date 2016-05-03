/// <reference path="2-interfaces.ts" />

namespace multiFiles.classes{
    export class JsonAbleString implements multiFiles.interfaces.IJson{
        private str: string;
        constructor(str: string){
            this.str = str;
        }
        
        toJSON(): string{
            return JSON.stringify(this.str);
        }
    }
    
    export class List<T extends multiFiles.interfaces.IJson> implements multiFiles.interfaces.IList<T>{        
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