
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


function findMatching(matching, namez){
    const result = matching.filter((drivers) => drivers.toLowerCase() === namez.toLowerCase())
    console.log(result);
    return result
   
}

function fuzzyMatch(fuzzy, names){
    const array = (fuzzy.filter((drivers) => drivers [0] === names [0]));
    console.log(array);
    return array
     
}
function matchName(drivers, person){
  console.log(person)
    const people = drivers.filter(driver =>( driver.name === person ))
 return people
}


