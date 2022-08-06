const axios=require('axios');

const keymovie=process.env.KEY_MOVIE
async function movie(req, res){
    const searchQuery=req.query.searchQuery;
    const moviesArr=await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${keymovie}&query=${searchQuery}`);

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