var fs = require ('fs')
// interact with file system directory('fs')= file system 

fs.readFile('baby_names.csv', function (err, data) { 
    // read file method to parse data and then execute this callback function if error occurs
    if (err) { 
        console.log(err)
        // logs the error for us to see
        throw err
        // stop executing based on the error 
    }
    var parsedData=data.toString('utf-8');
     // transform into human- readable characters(utf-8) string 
    console.log(parsedData); 
    // logs parsed data into console 
    }) 
   