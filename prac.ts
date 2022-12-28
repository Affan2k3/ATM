import inquirer from "inquirer"

type answer = {
    username :string;
    pin : number;
    accounttype : string;
    options : string;
    cashamount : number;

}

const input = await inquirer.prompt([
    {
        name : "username",
        type : "string" ,
        message :"Enter your Username"
    },
    {
        name : "pin",
        type : "number",
        message : "Enter pin",
        when(answers){
            return answers.username
        }
    },
    {
        name : "accounttype",
        type : "list" ,
        choices : ["Current Account", "Savings Account"],
        message :"Choose Account Type",
        when(answers){
            return answers.pin
        }
    },
    {
        name: "options",
        type: "list",
        choices: ["Fast cash", "Balance inquiry", "Cash withdrawl"],
        message: "What would you like to do?",
        when(answer) {
            return answer.accounttype;
        }
    },
    {
        name: "cashamount",
        type: "list",
        choices: [500, 1000, 3000, 5000, 10000],
        message: "Select amount",
        when(answers) {
            return answers.options === "Fast cash";
        }
    },
    {
        name: "cashamount",
        type: "number",
        choices: [500, 1000, 3000, 5000, 10000],
        message: "Enter Amount",
        when(answers) {
            return answers.options === "Cash withdrawl";
        }
    }
])

console.log(input.username, input.pin, input.accounttype, input.options)

const { username,pin ,accounttype,options,cashamount} = input

const Balance = Math.floor(Math.random() * 1000000)

if (username && pin && cashamount){
    if (Balance > cashamount){
    let remainingbalance = Balance - cashamount
    console.log("Transaction Successful / Your current balance is ", remainingbalance)
}
 else {
    console.log("Insufficient Balance")
}
}
