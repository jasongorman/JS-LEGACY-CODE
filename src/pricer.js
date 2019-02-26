function price(imdbId) {

    const request = require("sync-request");

    const response = request('GET', 'http://www.omdbapi.com/?i=' + imdbId + '&apikey=6487ec62');
    const body = response.getBody();

    const rating = JSON.parse(body).imdbRating;
    const title = JSON.parse(body).Title;

    let base_price = 3.95;

    if (rating >= 7) {
        base_price += 1.0;
    }
    if (rating < 4) {
        base_price -= 1.0;
    }

    return {title: title, price: base_price};

}

module.exports = price;