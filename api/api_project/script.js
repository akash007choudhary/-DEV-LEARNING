


let url = 'https://v2.jokeapi.dev/joke/Any';
let butn = document.querySelector("#btn");


butn.addEventListener("click",getjokes);

async function getjokes(){
    try{

    let res= await axios.get(url);
    let para= document.querySelector("#facts");

     para.innerText= `${res.data.setup}\n${res.data.delivery}`;
    }
    catch(e){
        console.log(e);
    }
}


