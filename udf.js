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


function getVisitorDetailsPurpose() {
    purpose = prompt("Enter your purpose of coming");
};

// check if name is correct 

// check if purpose is correct - 
function validatePurpose(purpose) {
    pu: while (true) {

        if (purpose === "") {
            continue pu;
        }

        else if (purpose == 'i' || purpose == 'm' || purpose == 'd') {
            console.log(`You have enter your purpose ${purpose}`);
            console.log("You may proceed");
        }

        else {
            console.log("You can only enter i, m, or d");
            continue pu;
        }
        break;
    }
};




function loop(visitorsName) {

    function handleVisitor() {
        alert("Welcome");
    };

    handleVisitor();

    let purpose;

    // take user details
    function getVisitorDetailsName() {
        let visitorsName = prompt("Enter your name: ");
        console.log(visitorsName);

        function validateName(visitorsName) {
            console.log(visitorsName);

            go: while (true) {

                if (visitorsName === "") {
                    continue go;
                }

                else if (visitorsName == 'exit') {
                    console.log("Exit")
                    break;
                }

                else {
                    console.log(`You have enter - ${visitorsName}`)
                }
                break;
            }
        };

        validateName();
    };

    getVisitorDetailsName();

    // ask for purpose of coming from user
    // getVisitorDetailsPurpose();

    if (visitorsName == "exit") {
        return;
    }
};

loop();