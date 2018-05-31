// App that connects to treehouse API and displays users badges using the command line argument.
const username = "justhorge";
const https = require('https'); // require https module
// Function to print message to console.
function printMessage(username,badgeCount,points){
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`; // var to hold message
    console.log(message);   // print message to console
}

// Connect to API URL
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    // Read the data
    // Parse the data
    // Print the data
    let body = "";
    response.on('data', data =>{
        console.log('data:', data.toString());
    });

    // testing git repo
});