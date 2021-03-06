// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 returns a function
 * Counter2 returns the value of count
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1, because it has an inner function which is requesting access to the outer functions variable.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1: when you need to access the code within a function.
 * counter2: when your only returning variables that are global
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}



/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
     let randomNumber = Math.floor(Math.random() * Math.floor(3));
    return randomNumber;
}

console.log(inning(5));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inningFunc, innings){
  let homeScore = 0;
  let awayScore = 0;

   //determining home score by passing the inning function in task 2
  for (let i = 0;i<innings;i++){
    homeScore += inningFunc();
    awayScore += inningFunc();
  }
  //determining away score same way as home
  // for (let i = 0;i<innings;i++){
  //   awayScore += inningFunc();
  // }
//returning score in object format as indicated by task
  let score = {
    home: homeScore,
    away: awayScore
  };

  console.log(score); //testing
  return score;
}

let finals = finalScore(inning,9);
console.log(finals);


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(inningFunc){ //function works similar to task 3 but it is only applying the score to one single inning instead of multiple innings.
  
  let homeScore = inningFunc();
  let awayScore = inningFunc();

  let score = {
    home: homeScore,
    away: awayScore
  };
  return score;

}

function scoreboard(getInningScore, inning, numInnings) {
  let inn = 0; let homeTally = 0; let awayTally = 0;

  for (let i =0;i<numInnings;i++){

    inn = getInningScore(inning); //the inning score is sent to the variable inn.

    console.log(i+' innning: '+inn['home'] + ' - ' + inn['away']); //outputting the score per inning as per task

    //aggregating tallys so that they can be shown in the end as the final score.
    homeTally += inn['home'];
    awayTally += inn['away'];

  }
  console.log('Final Score: ' + homeTally + ' - ' + awayTally );
}

let cubsVsReds = scoreboard(getInningScore, inning, 9); //initializing scoreboard function
console.log(cubsVsReds);
