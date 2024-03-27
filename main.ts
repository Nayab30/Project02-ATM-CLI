#! /usr/bin/env  node
import inquirer from "inquirer";
import chalk from "chalk";


let my_pin = 1234;

const ans = await inquirer.prompt([
    {
        name :"id",
        type : "string",
        message : "Enter your ID name:",
    },
    {
        name :"pin",
        type : "number",
        message : "Enter your PIN code:",
    }
    
]);

let myBalance = 10000;

if (ans.pin === my_pin){
    console.log(chalk.yellow`Congratulation! Correct PIN code `)
    console.log(`Dear ${ans.id}, Your current balance is ${myBalance}`)
    const ans1 = await inquirer.prompt([
        {
            name : "transaction",
            type: "list",
            choices: ["withdraw","check balance"],
            message :"What do you want?",
         }
     ])
if(ans1.transaction === "withdraw"){
    const ans2 = await inquirer.prompt([
        {
            name : "amount",
            type :"number",
            message : "Enter your withdraw amount",
        }
    ]) 
 let withdraw = myBalance-ans2.amount
 console.log(chalk.bgWhite.bold.green`\n Your balance is : ${withdraw} `);
}
else ( ans1.transaction === "check balance")
{
    
    console.log(`\nYour balance is ${myBalance}`)
}
}else(
    console.log(chalk.red`Sorry enter your right PIN code`)
);
 
