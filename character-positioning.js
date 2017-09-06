function countLetters(str){
  const splitWords = str.split(' ').join('').toLowerCase();
  const splitLetters = splitWords.split('');
  let letters = {}; //Object
  for(let i = 0; i < splitLetters.length; i++){
    const char = splitLetters[i];
     //console.log(char);
    let position = [i];
    if (letters[char] === undefined){
      //letters[char] = position.push(i);
      letters[char] = position;
    } else {
      letters[char].push(i);
      //letters[position].push(i);
    }
  }
  return letters;
}
//console.log(countLetters("hello"));
console.log(countLetters("Lighthouse in the house"));




/* solution
{}
l:[0]
i:[1]
g:[2]
h:[3]
t:[4]
h:[3,5]
o:[6]
u:[7]
s:[8]
e:[9]
i:[1,10]
n:[11]
t:[4,12]
h:[3,5,13]
e:[9,14]
h:[3,5,13,15]
o::[6,16]
u:[7,17]
s:[8,18]
e:[9,14,19]
}
*/