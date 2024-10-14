// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function appendCat(name){
    let newCats = [...cats, name];
    return newCats;
}
function prependCat(name){
    let newCats = [name, ...cats];
    return newCats;
}
function removeFirstCat(){
    return cats.slice(1);
}
function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}