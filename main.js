import { searchFunction } from './search.js';
import { peopleArray } from './people.js';

searchFunction(peopleArray, "gender", "man")
  .then(results => {
    console.log("Результати пошуку (gender: man):");
    results.forEach(person => {
      console.log(person.greeting());
      console.log(person.getInfo('gender'));
      console.log("----------------------");
    });
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });

  
searchFunction(peopleArray, "gender", "unknown")
  .then(results => {
    console.log("Результати пошуку (gender: unknown):");
    results.forEach(person => {
      console.log(person.greeting());
      console.log(person.getInfo('gender'));
      console.log("----------------------");
    });
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });