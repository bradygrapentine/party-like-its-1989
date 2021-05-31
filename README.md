# Party Like Its 1989

![SDG](./docs/button.png)

<!-- It's 1989 and the Internet has just come online and Tim Berners-Lee is going to invent the World Wide Web. The Cold War is ending, and the Berlin Wall will be coming down. It's also going to be a great year for film. In this assignment, you're going to build a small webpage that showcases some of the most popular movies of 1989.

The data for this assignment comes from The Movie DB API.

You will need to sign up and make an account to get an API key. In the URL below replace the text YOUR_KEY_HERE with the key you receive when signing up for an account.

https://image.tmdb.org/t/p/w185/2FC9L9MrjBoGHYjYZjdWQdopVYb.jpg => sample image path

https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=YOUR_KEY_HERE ==> api endpoint for data

api key: 44f9f452be88057e15959be8257069c0

example api request: https://api.themoviedb.org/3/movie/550?api_key=44f9f452be88057e15959be8257069c0

example movie object:
{
"page": 1,
"results": [
{
"poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
"adult": false,
"overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
"release_date": "2016-08-03",
"genre_ids": [
14,
28,
80
],
"id": 297761,
"original_title": "Suicide Squad",
"original_language": "en",
"title": "Suicide Squad",
"backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
"popularity": 48.261451,
"vote_count": 1466,
"video": false,
"vote_average": 5.91
},
{
"poster_path": "/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg",
"adult": false,
"overview": "The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.",
"release_date": "2016-07-27",
"genre_ids": [
28,
53
],
"id": 324668,
"original_title": "Jason Bourne",
"original_language": "en",
"title": "Jason Bourne",
"backdrop_path": "/AoT2YrJUJlg5vKE3iMOLvHlTd3m.jpg",
"popularity": 30.690177,
"vote_count": 649,
"video": false,
"vote_average": 5.25
},...

Objectives

    Work with API data

    Understand and use React components

    Understand and use "props" in React

    Use map to render a collection of components in React -->

Explorer Mode

    -Use the API to fetch the data and render it on the page, rather than the supplied JSON file.

<!-- DONE -->

    -You should have at least two components; App and Movie.

<!-- DONE -->

    -Render at least the title, poster image, and plot overview.

<!-- DONE -->

    - Feel free to include other pieces of the data.

<!-- DONE -->

    - Try to capture a 1980's or early 90's aesthetic when you style your page. Have fun with it!

<!-- DONE -->

Adventure Mode

    - Sort the films by release date, rather than as they appear in the file.'

<!-- DONE -->

    ----------------Add a search bar that filters down the shown results. Note that is not making a new API call, just filtering the current list

    ~ update state with input the way the scoreboard was implemented, but, instead of updating the display, update a variable in the filtering method

    - Display the release date in a formatted manner, e.g. "May 24th", rather than 1989-05-24.

<!-- DONE -->

    HINT: moment.js or date-fns or some utility  code you write yourself!

Epic Mode

    - Give the user a chance to "favorite" movies and store favorite movies in local storage

    ~ when you figure this out for minesweeper, you'll be able to clone it

    - Explore the API and use other endpoints.

    ~ see if you can link to a particular movie and display more information

    - Allow the user to change the year they are searching for

    - Change the style based on the decade they user selected
