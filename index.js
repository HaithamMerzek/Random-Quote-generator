var quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        name: " Oscar Wilde",
    },
    {
        quote: "so many books, so little time .",
        name: " Frank Zappa",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        name: "Mae West",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        name: "Mahatma Gandhi",
    }
]
function test(){    
    var randomNumber = Math.floor(Math.random()*quotes.length);
    console.log(quotes[randomNumber].quote);
    console.log(quotes[randomNumber].name);
    document.getElementById("quote").innerHTML = quotes[randomNumber].quote
    document.getElementById("name").innerHTML = quotes[randomNumber].name
}
