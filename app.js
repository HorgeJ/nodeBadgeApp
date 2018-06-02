// App that connects to treehouse API and displays users badges using the command line argument.

const https = require('https'); // require https module
// Function to print message to console.
function printMessage(username,badgeCount,points){
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`; // var to hold message
    console.log(message);   // print message to console
}

function getProfile(username){
try {
// Connect to API URL
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => { // connect to Treehouse API corresponding to username provided in argv
    // Read the data
    let body = "";                  // variable to hold concat string of response
    response.on('data', data =>{    // returns data, add it to temp string
        body += data.toString();
    });
        // Parse the data
    response.on('end', ()=>{        // when response returns end, parse the data into JSON object
        const profile = JSON.parse(body);   // parsed JSON object
        // print message
        printMessage(username,profile.badges.length,profile.points.JavaScript); // call print message function
    });
});
} catch(error) {
        console.error(error.message); // if err, print out message from error object
    }
}

const users = process.argv.slice(2);    // access command line arguments, remove the first two
users.forEach(getProfile);              // call getProfile function for each user, using argv array of users