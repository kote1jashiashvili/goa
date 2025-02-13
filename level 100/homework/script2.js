let movie = {
    title: "golden sky",
    director: "hamel broadray",
    releaseYear: "1994",
    duration: "1 hour, 34 minutes, 23 secounds.",
    GetmovieInfo: function() {
        console.log("this movie's title is " + $(this.title) + ". this movie's director is " + $(this.director) + " this book published at " + $(this.releaseYear) + ". this movie's duration is " + $(this.duration) + ".")
    }
}