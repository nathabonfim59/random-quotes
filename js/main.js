var quote, quotesDatabase;
// Download the database of quotes
$.getJSON("quotes.json", function(json) {
    quotesDatabase = json;
    console.log(quotesDatabase);
});


function randomQuote() {
    var randomNumber = Math.floor(Math.random() * (quotesDatabase.quotes.length));
    console.log(randomNumber);
    var quote = quotesDatabase.quotes[randomNumber];
    console.log(quote);
    
    return quote;
}

function changeQuoteText() {
    quote = randomQuote();
    $("#quote").text('"'+quote.content+'"');
    $("#quoteAuthor").text(quote.author);
}

$(document).ready(function() {
    $('#randomQuote').click(function() {
        changeQuoteText();
    });
    var myUrl = 'https://github.com/nathabonfim59';
    $("#shareOnFacebook").click(function() {
        var quoteForFacebook = ['"'+(quote.content.split(' ').join('+')+'"'), quote.author.split(' ').join('+')];
        window.open('https://www.facebook.com/sharer/sharer.php?u='+myUrl+';src=sdkpreparse&quote='+ quoteForFacebook[0]+'+—'+quoteForFacebook[1],'popup');
    });
    
    $("#shareOnTwitter").click(function(){
        var quoteForTwitter = [('"'+quote.content+'"'), quote.author];
        window.open('https://twitter.com/intent/tweet?original_referer=' + myUrl + '&ref_src=twsrc%5Etfw&text=' + quoteForTwitter[0] + '%20%E2%80%94%20' + quoteForTwitter[1] +'%20via&tw_p=tweetbutton&url=' + myUrl);
    });
});