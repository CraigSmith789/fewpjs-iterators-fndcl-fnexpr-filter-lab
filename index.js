// Code your solution here


// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(array, string){
    return array.filter(obj => 
   
  obj.toLowerCase() === string.toLowerCase())}


// findMatching(drivers, "Bobby")

function fuzzyMatch(array, string){
  return array.filter(obj =>
    obj.charAt(0) === string.charAt(0)) 

}

function matchName(array, string){
  return array.filter(obj => 
   
    obj.name === string)}

