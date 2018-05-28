// App that connects to treehouse API and displays users badges using the command line argument.


// Function to print message to console.
function printMessage(username,badgeCount,points){
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`; // var to hold message
    console.log(message);   // print message to console
}

printMessage("Horge", 100, 328);

// Connect to API URL
// Read the data
// Parse the data
// Print the data