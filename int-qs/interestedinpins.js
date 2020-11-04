/* You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times you showed an ad on each individual domain. Every line consists of a count and a domain name. It looks like this:

var counts = [ "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org" ];

Write a function that takes this input as a parameter and returns a data structure containing the number of hits that were recorded on each domain AND each domain under it. For example, a click on "sports.yahoo.com" counts for "sports.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "sports" and "sports.yahoo" are not valid domains.)

Expected output (in any order):
1320    com
 900    google.com
 410    yahoo.com
  60    mail.yahoo.com
  10    mobile.sports.yahoo.com
  50    sports.yahoo.com
  10    stackoverflow.com
   3    org
   3    wikipedia.org
   2    en.wikipedia.org
   1    es.wikipedia.org */


var counts = [ "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "2,en.wikipedia.org",
    "1,es.wikipedia.org" ];

function domainCounts(arr){
    let results = [], map = {};
    for(let i = 0; i < arr.length; i++){
        let current = arr[i].split(',');
        let domains = splitWord(current[1]);
        for(let j = 0; j < domains.length; j++){
            if(map[domains[j]] === undefined){
                map[domains[j]] = parseInt(current[0]);
            } else {
                map[domains[j]] += parseInt(current[0]);
            }
        }
    }
    return map;
}

function splitWord(element){
    let parts = element.split('.'), results = [];
    for(let i = 0; i < parts.length; i++){
        results.push(parts.slice(i, parts.length).join('.'));
    }
    return results;
}

const countSubdomains = (list) => {
  let map = {};
  list.forEach(domain => {
    let splitDomain = domain.split(",");
    let count = parseInt(splitDomain[0]);  
    let domainStr = splitDomain[1];
    let domains = domainStr.split(".");
    for(let i = 0; i < domains.length; i++){
      if(map[domainStr] === undefined){
        map[domainStr] = count;
      } else {
        map[domainStr] += count;
      }
      domainStr = domainStr.substr(domainStr.indexOf(".") + 1, domainStr.length - 1);
    }
  });
  return map;
}








const getDomainCount = (list) => {
  let map = {};
  list.forEach(domain => {
    domain = domain.split(",");
    let count = parseInt(domain[0]);
    let splitDomains = domain[1].split(".");
    let domains = getAllDomains(splitDomains);
    for(let i = 0; i < domains.length; i++){
      let current = domains[i];
      if(map[current] === undefined){
        map[current] = count;
      } else {
        map[current] += count;
      }
    }
  });
  let sorted = sortCounts(map);
  let sortedMap = createSortedMap(sorted);
  return sortedMap;
}

const getAllDomains = (domains) => {
  let result = [];
  for(let i = 0; i < domains.length; i++){
    result.push(domains.slice(i, domains.length).join("."));
  }
  return result;
}

const sortCounts = (obj) => {
  let result = [];
  for(let key in obj){
    result.push([key, obj[key]]);
  }
  result.sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  });
  return result;
}

const createSortedMap = (list) => {
  let map = {};
  for(let i = 0; i < list.length; i++){
    let current = list[i][0];
    let count = list[i][1];
    if(map[current] === undefined){
      map[current] = count;
    }
  }
  return map;
}

console.log(getDomainCount(counts));