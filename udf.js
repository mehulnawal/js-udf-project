/*
Question: Create a Reception System using User-Defined Functions (UDF) in JavaScript
Write a JavaScript program that simulates a reception system using User-Defined Functions (UDFs). The system should:

Define functions to handle different parts of the reception process:
getVisitorDetails(): Prompts the visitor for their name and purpose.
validatePurpose(purpose): Checks if the purpose is valid (allowed: "meeting", "delivery", "interview").
handleVisitor(name, purpose): Displays a welcome message or asks for valid input again.
Use a loop to continuously take visitor entries until the visitor enters "exit".
Use a counter to track the number of visitors.
Ensure input validation (empty name should prompt again).
Limit incorrect attempts for invalid purpose (maximum 3 tries before stopping). 
*/

let count = 0;

function loop(visitorsName) {


    function welcomeVisitor() {
        alert("Welcome");
        console.log("WELCOME");
    };

    welcomeVisitor();

    let purpose;

    // take user details and validate name details
    function getVisitorDetailsName() {
        visitorsName = prompt("Enter your name: ");

        function validateName(visitorsName) {

            go: while (true) {

                if (visitorsName === "") {
                    visitorsName = prompt("Name cannot be empty. Enter your name again: ");
                    continue;
                }

                else if (visitorsName == 'exit') {
                    console.log("You have entered Exit")
                    return false;
                }

                else {
                    console.log(`Welcome ${visitorsName}`)
                    return true;
                }

                break;
            }
        };

        return validateName(visitorsName);
    };

    if (!getVisitorDetailsName()) {
            return;
    }

    // check if purpose is correct - 
    purpose = prompt("Enter your purpose of coming");
    function validatePurpose(purpose) {

        pu: while (true) {

            if (purpose === "") {
                purpose = prompt("Purpose cannot be empty. Enter again (i/m/d): ");
                continue pu;
            }

            else if (purpose == 'i' || purpose == 'm' || purpose == 'd') {
                if (purpose == 'i')
                {
                    console.log(`You have enter your purpose - interview`);
                }
                else if  (purpose == 'm')
                {
                    console.log(`You have enter your purpose - meeting`);
                }
                else if  (purpose == 'd')
                {
                    console.log(`You have enter your purpose - delivery`);
                }

                console.log("You may proceed");
                break;
            }

            else {
                console.log("You can only enter i, m, or d");
                continue pu;
            }
            
            break;
        }
    };

    validatePurpose(purpose);
};

loop();
count++;
console.log(`Number of visitors - ${count}`);