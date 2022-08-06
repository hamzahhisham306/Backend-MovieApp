const axios=require('axios');

async function movie(req, res){
    const searchQuery=req.query.searchQuery;
    const moviesArr=await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchQuery}`);

    try{
        const arrayOfmovies=moviesArr.data.results.map((movie)=>new Movie(movie));
        res.status(200).send(arrayOfmovies);
    }
    catch(error){
        handlerError(error, res);
    }
}


function handlerError(err, res){
    res.status(500).send('Something went wrong');
}

class Movie{
    constructor(movie){
        this.poster_path=movie.poster_path;
        this.title=movie.title;
        this.vote_average=movie.vote_average;
        this.overview=movie.overview;

    }
}

module.exports=movie;