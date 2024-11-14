const fs = require("fs"); //Get the filesystem node module

//fs.writeFile("message.txt", "Hello from nodeJS", (err) => {
    //if (err) throw (err); //Fails
    //console.log("The file was written"); // Runs
//});

fs.readFile("message.txt","utf-8",(err, data) => { //Data is data read from the file (uft-8) to make output human readable
    if (err) throw err;
    console.log(data);
});