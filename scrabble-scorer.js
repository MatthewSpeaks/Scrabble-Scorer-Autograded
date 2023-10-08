// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "\n";
 
	   for (let i = 0; i < word.length; i++) {
 
	      for (const pointValue in oldPointStructure) {
 
		      if (oldPointStructure[pointValue].includes(word[i])) {
			      letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		         }
 
	      }
	   }
	   return letterPoints;
};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! \n\nEnter a word to score: ");
   while (!isValidWord(word)) {
      word = input.question('please enter a valid input that does not include spaces or special characters: ');
   }
   return wordToGrade = word.toLowerCase();
};

function isValidWord(word) {
   word = word.toLowerCase();
   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
   for (let i = 0; i < word.length; i ++) {
      if (!(alphabet.includes(word[i]))) {
         return false;
      }
   }
   return true;
};

let simpleScorer = function(word) {
   let score = 0;
   for (let i = 0; i < word.length; i++) {
      score++;
   }
   return score;
};

let simpleScorerObject = {
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scorerFunction: simpleScorer
};

let vowelBonusScorer = function(word) {
   let score = 0;
   let isVowel = 'aeiou';
   for (let i = 0; i < word.length; i++) {
      if (isVowel.includes(word[i])) {
         score += 2;
      }
      score++;
   }
   return score;
};

let vowelBonusScorerObject = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScorer
};



let scrabbleScorer = function(word) {
   funcWord = word.toLowerCase();
   let score = 0;
   for (let i = 0; i < funcWord.length; i++) {
      wordKey = funcWord[i];
      score += newPointStructure[wordKey];
      }
   return score;
   };

   let scrabbleScorerObject = {
      name: "Scrabble Scorer",
      description: "The traditional scoring algorithm.",
      scorerFunction: scrabbleScorer
      };

const scoringAlgorithms = [simpleScorerObject, vowelBonusScorerObject, scrabbleScorerObject];

function scorerPrompt() {
   let selectedScorer = input.question(`
Which scoring algorithm would you like to use?

0 - ${simpleScorerObject.name}, ${simpleScorerObject.description}
1 - ${vowelBonusScorerObject.name}, ${vowelBonusScorerObject.description}
2 - ${scrabbleScorerObject.name}, ${scrabbleScorerObject.description}
Enter 0, 1, or 2: `);
   selectedScorer = Number(selectedScorer);
   while (selectedScorer < 0 || selectedScorer > 2) {
      selectedScorer = Number(input.question("Please select a valid scorer option by inputting 0, 1, or 2: "));
   };
   return console.log(`Score for '${scoringAlgorithms[selectedScorer].name}' : ${scoringAlgorithms[selectedScorer].scorerFunction(wordToGrade)} `);
};


function transform(object) {
   let newObject = {};
   for (item in object) {
      for (let i = 0; i < object[item].length; i++) {
         numberValue = Number(item);
         newObject[(object[item][i].toLowerCase())] = numberValue;
      }
   }
   return newObject;
};

let newPointStructure = transform(oldPointStructure);

let wordToGrade = '';

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
};

/*First run some test words with your program. Here are some words you can use to test your code:

JavaScript = 24 points using Scrabble, 10 using Simple Score, and 16 using Bonus Vowels.
Scrabble = 14 points using Scrabble, 8 using Simple Score, and 12 using Bonus Vowels.
Zox = 19 points using Scrabble, 3 using Simple Score, and 5 using Bonus Vowels.
*/

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
