var movies = [
    {
        title:"Avengers",
        hasWatched:true,
        rating:5
    },
    {
        title:"Dreamgirl",
        hasWatched:true,
        rating:4.5
    },
    {
        title:"Dil Bechara",
        hasWatched:false,
        rating:4.5
    }
];
var result = "You Have ";
for(var movie=0; movie<movies.length; movie++){
    
    if(movies.hasWatched){
        result += "watched ";
    }
    else{
        result += "not watched ";
    }
}
result += "\"" + movies.title + "\"-";
result += movies.rating + " stars ";
 var final = result;
 console.log(final);