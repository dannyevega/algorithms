/*
  Sort the list returned from `createAccounts` by the order of listA
*/

var listA = [
    "example.10@example.com",
    "example.09@example.com",
    "example.08@example.com",
    "example.07@example.com",
    "example.06@example.com",
    "example.01@example.com",
    "example.02@example.com",
    "example.03@example.com",
    "example.04@example.com",
    "example.05@example.com"
];


function createAccounts() {
    var listB = [
        { id: 9, email: "example.09@example.com", productId: 1},
        { id: 1, email: "example.01@example.com", productId: 1},
        { id: 3, email: "example.03@example.com", productId: 1},
        { id: 5, email: "example.05@example.com", productId: 1},
        { id: 2, email: "example.02@example.com", productId: 1},
        { id: 6, email: "example.06@example.com", productId: 1},
        { id: 7, email: "example.07@example.com", productId: 1},
        { id: 4, email: "example.04@example.com", productId: 1},
        { id: 10, email: "example.10@example.com", productId: 1},
        { id: 8, email: "example.08@example.com", productId: 1}
    ];

    return Promise.resolve(listB);
}

const sortAccounts = (list) => {
    let listB = createAccounts();
    return listB.then((response) => {
       return response.sort((a, b) => {
            list.forEach(email => {
                return (a["email"] === email) - (b["email"] === email);
            });
       })
    }).then(response => console.log(response))

}

sortAccounts(listA);



// https://www.hackerrank.com/paper/miimkemkdladhvggjqjtiuaiaifziqbl?b=eyJpbnRlcnZpZXdfaWQiOjYwODQzMiwicm9sZSI6ImludGVydmlld2VyIiwic2hvcnRfdXJsIjoiaHR0cDovL2hyLmdzL2NjNzliOSJ9#



let str = 'alaaaassa' // ala4s2a
let str = 'aaabbcccddd' // ala4s2a

const stringCompression = (str) => {
  let result = '';
  for(let i = 0; i < str.length; i++){
    let current = str[i], count = 1;
    if(str[i + 1] !== current){
      result += current;
    } else {
      while(str[i + 1] === current){
        count++;
        i++;
      }
      result += (current + count);
    }
  }
  return result;
}

// console.log(stringCompression(str));

let str = 'ala4s2a';

const stringDecompression = (str) => {
  str = str.split('');
  let result = '';
  for(let i = 0; i < str.length; i++){
    let current = str[i];
    if(isNaN(current) === false){
      continue;
    } 
    if(isNaN(parseInt(str[i + 1])) !== false){
      result += current;
    } else {
      let count = 0;
      while(count < parseInt(str[i + 1])){
        result += current;
        count++
      }
    }
  }
  return result;
}

// console.log(stringDecompression(str));


