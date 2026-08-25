let url = "https://catfact.ninja/fact";

// fetch() sends an HTTP GET request to the URL
fetch(url)

    // Runs when the server sends a response
    .then((res) => {

        // res = Response object (not the actual data yet , not redable if any responbse comes teh promise becomes resolved )
        console.log(res);

        // Convert response JSON into JavaScript data to get the actuall data
        return res.json();
    })

    // Receives the actual data after json() is converted
    .then((data) => {

        // Access and print the "fact" property
        console.log(data.fact);   // as yahan json ko obj main kr diye then we can access the properites just like we do for objects
    })

    // Runs if an error occurs
    .catch((e) => {
        console.log("error", e);
    });




// NOTES 
// fetch(url) → Promise that gives you the Response object
// res.json() → Promise that gives you the actual JavaScript data


// "fetch() is a built-in JavaScript API that returns a Promise representing the eventual completion of an HTTP request."



// EVEN IFF WE HAVE ANY OTHER CODE THAT NEEDS TO BE RUN THEN IT WIL BE DONE FIRST THEN WHEN THE APII REQUEST GETS THE RESPONSE THEN IT WILL RUN SO THE ASYNCHRONUS PROPERTY OF IT IS ALSO SEEN 








// using async and await bewtter structure and easy to unbdersrtand 


let url = "https://catfact.ninja/fact";

async function getFact() {

    try {
        // fetch() sends an HTTP GET request
        let res = await fetch(url);

        // Convert response JSON into JavaScript data
        let data = await res.json();

        // Print the cat fact
        console.log(data.fact);

    } catch (e) {
        // Handle any error
        console.log("error", e);
    }
}

getFact(); // Call the function\






// using axios libary 
{/* <script src="https://cdn.jsdelivr.net/npm/axios@<x.x.x>/dist/axios.min.js"></script>
let url = "https://catfact.ninja/fact"; */}
// thsi is inlcuded i the html file


import axios from "axios";

let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
    } catch (e) {
        console.log("error", e);
    }
}

getFact();









// passing headers with api requests

async function getjokes() {
    try{
        const config= {
            headers:{
                key : values   //aise sare pairs bhej denge obj jaise 
            }
        };

        let res = await axios.get(url,config);   // aise dono parmetres ko pass krdete hia 
    }
    catch(err){
        console.log(err);
    }
}

// yaham u neeed to check the api in teh api variefir you saved to knwo which headers to paas and what key and values to send