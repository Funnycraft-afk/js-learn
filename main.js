const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
let count = 2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i <= count; i++) {
        let newFilm = prompt('Один из просмотренных фильмов?', '')
        let filmScore = prompt('На сколько оцените?', '')
        personalMovieDB.movies[newFilm] = filmScore
    }



console.log(personalMovieDB);