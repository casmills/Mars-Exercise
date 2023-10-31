
alert(`Welcome to the Mars Adventure`);
alert(`Booting Up.......`);
alert(`All Systems Go!`);
alert(`Let's Start!`);
const username = prompt(`Welcome Adventurer. What is your name?`)
alert(`Hi ${username} - It is great to have you aboard this great opportunity to go to Mars. We will be departing shortly and have a lot to do!`)
alert(`This is going to be the Journey of a lifetime!`)
let excitement = prompt(`Are you excited ${username}?(Type Y or N)`)
excitement = excitement.toUpperCase();
if (excitement === `Y`){alert(`I knew you'd be excited`);}
else{alert(`It's to late now, you're going!`);}
alert(`It's time to pack for your trip`)
let numSuitcases = prompt(`How many suitcases are you planning to bring?`)
if (numSuitcases > 2){alert(`That is too many, you'll have to pack tighter!`);}
else{alert(`Perfect! You are an excellent packer!`);}
alert(`You're allowed to bring one companion animal with you.`);
let companionType = prompt(`What kind of companion animal would you like to bring?`);
let companionName = prompt(`What is your companions name?`);
let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();
companionName = firstLetter + otherLetters;
alert(`That's awesome ${companionName} the ${companionType} is going to be coming with you!`); 

alert(`NASA has an interior design team offering to outfit your space ship.`);
alert(`You have a few options for the interior decor to choose from. Your options are:
A Sleek & Modern
B Retro Vintage
C Victorian Steampunk`);

let decorChoice = prompt(`Which would you prefer? A? B? or C?`)
decorChoice = decorChoice.toUpperCase();

let decor;
if (decorChoice === `A`) {decor = `Sleek & Modern`;}
if (decorChoice === `B`) {decor = `Retro Vintage`;}
if (decorChoice === `C`) {decor = `Victorian Steampunk`;}

console.log(decor)

alert(`${username} and ${companionName}, will be blasting off in a Spaceship with the design of ${decor}.`);

let timer = 5;
while (timer > 0) {alert(`${timer}...`);timer= timer-1}
alert(`***LIFTOFF***`)

