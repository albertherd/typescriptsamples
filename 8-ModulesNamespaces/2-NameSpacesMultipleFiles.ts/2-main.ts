/// <reference path="2-classes.ts" />


namespace multiFiles.main{       
    let stringList: multiFiles.classes.List<multiFiles.classes.JsonAbleString> = new multiFiles.classes.List<multiFiles.classes.JsonAbleString>();
    stringList.add(new multiFiles.classes.JsonAbleString("bear two"));
    stringList.add(new multiFiles.classes.JsonAbleString("typescript"));
    console.log("List contains the word typescript? " + stringList.contains(new multiFiles.classes.JsonAbleString("typescript")));
    console.log("The word typescript is found at position " + stringList.indexOf(new multiFiles.classes.JsonAbleString("typescript")));
    stringList.remove(new multiFiles.classes.JsonAbleString("typescript"));
    console.log("List contains the word typescript? " + stringList.contains(new multiFiles.classes.JsonAbleString("typescript")));
    console.log("The word typescript is found at position " + stringList.indexOf(new multiFiles.classes.JsonAbleString("typescript")));    
}    
