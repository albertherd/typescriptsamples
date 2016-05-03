import * as classes from './2-classes';
import toLowerCase from './2-helpers'


let stringList: classes.List<classes.JsonAbleString> = new classes.List<classes.JsonAbleString>();
stringList.add(new classes.JsonAbleString("bear two"));
stringList.add(new classes.JsonAbleString("typescript"));
console.log("List contains the word typescript? " + stringList.contains(new classes.JsonAbleString("typescript")));
console.log("The word typescript is found at position " + stringList.indexOf(new classes.JsonAbleString("typescript")));
stringList.remove(new classes.JsonAbleString("typescript"));
console.log("List contains the word typescript? " + stringList.contains(new classes.JsonAbleString("typescript")));
console.log("The word typescript is found at position " + stringList.indexOf(new classes.JsonAbleString("typescript")));
console.log(toLowerCase("HELLO!"));


