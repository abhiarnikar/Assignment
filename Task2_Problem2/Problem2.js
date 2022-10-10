// Find the longest substring with repeating characters

function string(str){

let array = {};
maxCount = 0;

var counter = 0;
for (var i = 0; i < str.length; i++) {
if (array[str[i]]) {
if (counter > maxCount) {
maxCount = counter
}
counter = 0;
array = [];
}
counter++;
array[str[i]] = true;
}
console.log(maxCount)
}

string('abcabcbb')
string('bbb')
string('pwwkew')
