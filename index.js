#!/usr/bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([
    { message: "Enter ist num", type: "number", name: "firstNum" },
    { message: "Enter 2nd num", type: "number", name: "secondNum" },
    {
        message: "select one of the operators to perform calculation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// console.log(ans)
// if statement
if (ans.operator === "Addition") {
    console.log(ans.firstNum + ans.secondNum);
}
else if (ans.operator === "Subtraction") {
    console.log(ans.firstNum - ans.secondNum);
}
else if (ans.operator === "Multiplication") {
    console.log(ans.firstNum * ans.secondNum);
}
else {
    console.log(ans.firstNum / ans.secondNum);
}
