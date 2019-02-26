const price = require('./pricer.js');

const rent = (imdbId) => {
    const movie = price(imdbId);
    return {id: imdbId, title: movie.title, price: movie.price};
}

module.exports = rent;