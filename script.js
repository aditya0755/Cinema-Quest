const searchForm= document.querySelector('form');
const searchSectionForm= document.querySelector('ul');
const inputbox=document.querySelector('.inputbox');
const searchSection = document.querySelector('.search-section');
const posterdiv =document.querySelector('.poster')
const jokediv = document.querySelector('.joke-decor');
//const items=document.querySelector('.items');


// fun to fetch movie details using OMBD API
const getMovieInfo = async (movie)=>{
    const myApiKey="bfd0e8b6";
    const url=`http://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`;

    const response = await fetch(url);
    const data= await response.json();

    console.log(data);
    showMovieData(data);
    getMoviePoster(data.imdbID);
}

const getMoviePoster = async (id)=>{
    const url=`https://imdb.iamidiotareyoutoo.com/search?tt=${id}`;

    const response = await fetch(url);
    const data= await response.json();

    //  console.log(data.short.image);
    showMoviePoster(data.short.image);
}

const getjoke = async ()=>{
    const url=`https://geek-jokes.sameerkumar.website/api?format=json`;
    const response = await fetch(url);
    const data= await response.json();

    console.log(data);
    showjoke(data);
}

// fun to show movie data on screen
const showMovieData = (data)=>{
    searchSectionForm.innerHTML="";
    //use array destructuring assignment to get properties from data obj
    const {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Type}=data;

    // const movieElements = document.createElement('ul');
    searchSectionForm.classList.add('decor');

    searchSectionForm.innerHTML = `<li> <p>#TITLE -> ${Title},</p> </li>
                                   <li> <p>#IMDB RATING -> ${imdbRating},</p> </li>
                                   <li> <p>#RELEASED -> ${Released},</p> </li>
                                   <li> <p>#ACTORS -> ${Actors},</p> </li>
                                   <li> <p>#RUNTIME -> ${Runtime},</p> </li>
                                   <li> <p>#Genre -> ${Genre}, </p></li>
                                   <li> <p>#TYPE -> ${Type},
                                   <li> <p>#PLOT -> ${Plot}`;
    
 }

 const showMoviePoster =(data)=>{
        posterdiv.innerHTML="";

        posterdiv.innerHTML=`<img src="${data}" alt="poster">`;

        // searchSection.prepend(posterelement);
 }

 const showjoke = (data) =>{
        jokediv.innerHTML="";
        const p=document.createElement('p');
        // p.classList.add('');
        p.innerHTML=`<h4 class="smile">Smile Corner</h4><br>
                    ${data.joke}`;
        jokediv.appendChild(p);
 }

 getjoke();

// adding eventlistener to search form
searchForm.addEventListener('submit',()=>{
    // console.log(inputbox.value);
    const movieName=inputbox.value.trim();
    if(movieName!== ''){
        getjoke();
        getMovieInfo(movieName);
        // getMoviePoster(movieName);
    }

});