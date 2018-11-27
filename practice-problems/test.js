var note = "this is a note for you from a secret admirer"
var magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you"

const harmless = (n, m) => {
  let map = {};
  magazineText = magazineText.split(" "); 
  magazineText.forEach(word => {
    if(map[word] === undefined){
      map[word] = 0;
    }
    map[word]++;
  });
  note = note.split(" ");
  for(let i = 0; i < note.length; i++){
    let current = note[i];
    if(map[current]){
      map[current]--;
      continue;
    }
    return false;
  }
  return true;
}
// console.log(harmless(note, magazineText));

const isPal = (word) => {
  word = word.replace(/[^\w\s]/gi, '').replace(/ /g, '').toLowerCase();
  let last = word.length - 1;
  for(let i = 0; i < word.length / 2; i++){
    if(word[i] === word[last]){
      last--;      
      continue;
    }
    return false;
  }
  return true;
}
console.log(isPal("Madam, I'm Adam"));

let palabra = "Benefiber";
const reverse = (word) => {
  word = word.split("");
  let last = word.length - 1;
  for(let i = 0; i < word.length / 2; i++){
    [word[i], word[last]] = [word[last], word[i]];
    last--;
  }
  return word.join("");
}
console.log(reverse(palabra));