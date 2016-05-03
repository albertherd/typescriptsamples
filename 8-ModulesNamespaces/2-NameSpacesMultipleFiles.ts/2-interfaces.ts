namespace multiFiles.interfaces{
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
    
