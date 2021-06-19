
// Iteration 1

let hacker1 = 'Diego';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'me';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2 {
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}


/// Iteration 3
//  3.1
let stringMod1 = '';
for (i = 0; i < hacker1.length; i++) {
    stringMod1 += hacker1[i].toUpperCase() + ' ';
}
console.log(stringMod1);

// 3.2
let reverseName = '';
for (i = hacker2.length; i > 0; i--) {
    reverseName += hacker2[i - 1];
}
console.log(reverseName);

// 3.3

if (hacker1 > hacker2) {
    console.log('The drivers name goes first')
} else if (hacker1 === hacker2) {
    console.log('What?! You both have the same name?')
} else {
    console.log('Yo, the navigator goes first definitely')
}
