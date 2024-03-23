#! /usr/bin/env node

import inquirer from "inquirer";


const systemGenratedNo = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {
        type : "number",
        name : "userGuess",
        message : "write your guess number between 1 to 10 :",
    },
]);


if(answer.userGuess === systemGenratedNo) {
    console.log(`Your Answer is Correct ${systemGenratedNo} , You Win`);
} else {
    console.log(`Try Again , Better luck Next Time`);
};





