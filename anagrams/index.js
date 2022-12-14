// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
 const aString=helper(stringA)
 const bString=helper(stringB)
 if(Object.keys(aString).length!==Object.keys(bString).length){
   return false
 }
 for(let char in aString){
   if(aString[char]!==bString[char]){
      return false
   }else{
      return true
   }
 }

}
function helper(str){
 let charMap={}
 for(char of str.replace(/[^\w]g/,'').toLowerCase()){
   charMap[char]= charMap[char]+1 || 1
 }
 return charMap
}
anagrams("rail safety", "fairy tales");
console.log(anagrams("rail safety", "fairy tales"));
module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const acharMap=help(stringA);
//     const bcharMap=help(stringB);
//     if(Object.keys(acharMap).length!== Object.keys(bcharMap).length){
//         return false
//     }
//     for(let char in acharMap){
//         if(acharMap[char]!== bcharMap[char]){
//             return false
//         }
//     }
//     return true
//     }
//     function help(str){
//         const charMap={};
//         for(let char of str.replace(/[^\w]g/,"").toLowerCase()){
//             charMap[char]= charMap[char]+1 || 1
//         }
//         return charMap
//     }
