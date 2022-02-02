// Code your solution here
function findMatching (drivers, name) {
    return drivers.filter(function(element) {
        return element.toLowerCase() === name.toLowerCase();
    })
}
function fuzzyMatch (drivers, name) {
    return drivers.filter(function(element){
        return (element.toLowerCase())[0] === (name.toLowerCase())[0];
    })
}
function matchName (drivers, name) {
    return drivers.filter(function(element){
        return element.name === name;
    })
}