// You're given an object with list key/value pairs. The key is the name of the year/baby center and it's value is an array of names
// The names are ordered in their rank for popularity for that given list year
  // i.e. "2016-baby-center-girls" 1st place - 'Sophia', 2nd place - 'Emma' and so on
// Write a function that takes in the object and a name and returns an array of objects where that name is found and it's popularity rank for that list

/*
Example:
getBabyRank(names, 'Sophia')

will return: 

[ { list: '2016-baby-center-girls', rank: 1 },
  { list: '2015-baby-center-girls', rank: 1 },
  { list: '2015-us-official-girls', rank: 3 } 
]
*/

let names = {
  "2016-baby-center-girls": [ "Sophia", "Emma", "Olivia", "Ava", "Mia", "Isabella", "Riley", "Aria", "Zoe", "Charlotte", "Lily", "Layla", "Amelia", "Emily", "Madelyn", "Aubrey", "Adalyn", "Madison", "Chloe", "Harper", "Abigail", "Aaliyah", "Avery", "Evelyn", "Kaylee", "Ella", "Ellie", "Scarlett", "Arianna", "Hailey", "Nora", "Addison", "Brooklyn", "Hannah", "Mila", "Leah", "Elizabeth", "Sarah", "Eliana", "Mackenzie", "Peyton", "Maria", "Grace", "Adeline", "Elena", "Anna", "Victoria", "Camilla", "Lillian", "Natalie" ],
  "2016-baby-center-boys": [ "Jackson", "Aiden", "Lucas", "Liam", "Noah", "Ethan", "Mason", "Caden", "Oliver", "Elijah", "Grayson", "Jacob", "Michael", "Benjamin", "Carter", "James", "Jayden", "Logan", "Alexander", "Caleb", "Ryan", "Luke", "Daniel", "Jack", "William", "Owen", "Gabriel", "Matthew", "Connor", "Jayce", "Isaac", "Sebastian", "Henry", "Muhammad", "Cameron", "Wyatt", "Dylan", "Nathan", "Nicholas", "Julian", "Eli", "Levi", "Isaiah", "Landon", "David", "Christian", "Andrew", "Brayden", "John", "Lincoln" ],
  "2015-baby-center-girls": [ "Sophia", "Emma", "Olivia", "Ava", "Mia", "Isabella", "Zoe", "Lily", "Emily", "Madison", "Amelia", "Riley", "Madelyn", "Charlotte", "Chloe", "Aubrey", "Aria", "Layla", "Avery", "Abigail", "Harper", "Kaylee", "Aaliyah", "Evelyn", "Adalyn", "Ella", "Arianna", "Hailey", "Ellie", "Nora", "Hannah", "Addison", "Mackenzie", "Brooklyn", "Scarlett", "Anna", "Mila", "Audrey", "Isabelle", "Elizabeth", "Leah", "Sarah", "Lillian", "Grace", "Natalie", "Kylie", "Lucy", "Makayla", "Maya", "Kaitlyn" ],
  "2015-baby-center-boys": [ "Jackson", "Aiden", "Liam", "Lucas", "Noah", "Mason", "Ethan", "Caden", "Logan", "Jacob", "Jayden", "Oliver", "Elijah", "Alexander", "Michael", "Carter", "James", "Caleb", "Benjamin", "Jack", "Luke", "Grayson", "William", "Ryan", "Connor", "Daniel", "Gabriel", "Owen", "Henry", "Matthew", "Isaac", "Wyatt", "Jayce", "Cameron", "Landon", "Nicholas", "Dylan", "Nathan", "Muhammad", "Sebastian", "Eli", "David", "Brayden", "Andrew", "Joshua", "Samuel", "Hunter", "Anthony", "Julian", "Dominic" ],
  "2015-us-official-girls": [ "Emma", "Olivia", "Sophia", "Ava", "Isabella", "Mia", "Abigail", "Emily", "Charlotte", "Harper" ],
  "2015-us-official-boys": [ "Noah", "Liam", "Mason", "Jacob", "William", "Ethan", "James", "Alexander", "Michael", "Benjamin" ]
}

const getBabyRank = (obj, name) => {
  let result = [];
  for(let key in obj){
    let names = obj[key];
    let position = names.indexOf(name);
    if(position !== -1){
      result.push({
        'list': key,
        'rank': position + 1
      })
    }
  }
  return result;
}

console.log(getBabyRank(names, 'Sophia'));