const findTheOldest = function(people) {
    people.sort(function (personA,personB){

        let ageA = 0;
        let ageB = 0;
      
          ageA = getAge(personA.yearOfBirth, personA.yearOfDeath);
          ageB = getAge(personB.yearOfBirth, personB.yearOfDeath);
          if(ageA > ageB)
           return -1;
          else if(ageB < ageA)
           return 1;
  })

  function getAge (birth,death){
      if(!death)
       death = new Date().getFullYear();

      return death-birth;
  }

  console.table(people);

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
