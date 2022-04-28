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
        let a = prompt('Один из просмотренных фильмов?', '')
        let b = prompt('На сколько оцените?', '')


        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                   personalMovieDB.movies[a] = b
        } else {
            console.log('erroe');
            i--;
        }
    }



console.log(personalMovieDB);