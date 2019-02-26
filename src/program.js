const rent = require('./rental.js');

let args = process.argv.slice(2)

let imdbId = args[0];

console.log(rent(imdbId));

/*
    Example movies:


    tt0096754 - high rated
    tt0060666 - low rated
    tt0317303 - medium rated

 */