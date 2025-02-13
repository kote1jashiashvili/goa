

let book = {
    title: "golden way",
    author: "hamen goldray",
    pages: "231",
    publishYear: "1967",
    GetSummary: function() {
        console.log("this book's title is " + $(this.title) + ". this book's author is " + $(this.author) + ". this book has " + $(this.pages) + " pages. this book published at " + $(this.publishYear) + ".")
    }
}


