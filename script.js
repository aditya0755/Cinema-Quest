const searchForm= document.querySelector('form');
const searchSectionForm= document.querySelector('ul');
const inputbox=document.querySelector('.inputbox');
const searchSection = document.querySelector('.search-section');
const posterdiv =document.querySelector('.poster')
const jokediv = document.querySelector('.joke-decor');


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

    showMoviePoster(data.short.image);
}

const getjoke = async ()=>{
    const url=`https://geek-jokes.sameerkumar.website/api?format=json`;
    const response = await fetch(url);
    const data= await response.json();
    showjoke(data);
}

const showMovieData = (data)=>{
    searchSectionForm.innerHTML="";

    const {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Type}=data;

    
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

 }

 const showjoke = (data) =>{
        jokediv.innerHTML="";
        const p=document.createElement('p');
        p.innerHTML=`<h4 class="smile">Smile Corner</h4><br>
                    ${data.joke}`;
        jokediv.appendChild(p);
 }

 getjoke();

searchForm.addEventListener('submit',()=>{
    const movieName=inputbox.value.trim();
    if(movieName!== ''){
        getjoke();
        getMovieInfo(movieName);
    }

});