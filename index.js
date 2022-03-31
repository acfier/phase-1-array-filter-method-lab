// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'];
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(drivers, string) {
    const newArr = drivers.filter(names => names.toLowerCase() === string.toLowerCase())
    return newArr
}

function fuzzyMatch(drivers, string) {
    const newArray = drivers.filter(names => names.startsWith(string))
    return newArray
}

function matchName(drivers, string) {
    const result = drivers.filter(driver => driver.name === string);
    return result 
}