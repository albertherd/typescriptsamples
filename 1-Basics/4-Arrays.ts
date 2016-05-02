(function(){
    //Thanks to http://www.thesaurus.com/browse/awesome
    let wordsDescribingTypeScript: string[] = ['Sports', 'Awesome', 'Bomba', 'Excellent'];
    let wordsDescribingTypeScriptGeneric: Array<string> = ['Impressive', 'Great', 'Breathtaking', 'Impressive'];
    let stuffDescribingTypeScript: any[] = [9001, true, 'Bomba'];
    
    let tupleDescribingTypeScript: [number, string] = [9001, 'Bomba'];
    
    tupleDescribingTypeScript[2] = 42;
    tupleDescribingTypeScript[2] = 'Sports';
    tupleDescribingTypeScript[2] = true;
})();