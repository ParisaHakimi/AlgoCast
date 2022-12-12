// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// level=4
// row=level(0 to 4)
// col=     2=>3 (0 to level*2-1)
         // 3=>5
        //  4=>7

function pyramid(n) {
    const middle=Math.floor((n*2-1)/2)
for(let row=0;row<n;row++){
    let level='';
    for(let col=0;col<n*2-1;col++){
        if(middle-row<=col && middle+row>=col){
            level+='#'
        }else{
            level+=' '
        }
    }
    console.log(level)
}
}

module.exports = pyramid;
