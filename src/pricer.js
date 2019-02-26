function price(imdbId) {

    const request = require("sync-request");

    const response = request('GET', 'http://www.omdbapi.com/?i=' + imdbId + '&apikey=6487ec62');
    const body = response.getBody();

    const rating = JSON.parse(body).imdbRating;
    const title = JSON.parse(body).Title;

    if(title == undefined){
        console.log('Unable to find movie with IMDB ID ' + imdbId);
        return;
    }

    let base_price = 3.95;

    if (rating >= 7) {
        base_price += 1.0;
    }
    if (rating < 4) {
        base_price -= 1.0;
    }

    console.log('The price of ' + title + ' is £' + base_price);

}

price('tt0096754');
price('tt0060666');
price('tt0317303');
price('xys123');

module.exports = price;