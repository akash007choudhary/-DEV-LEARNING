// selecting element  ** but only first h1 hi select hoga uske baad ke nhi 
// let x = document.querySelector("h1");
// console.log(x);

// isse all ke wajah se sare same name wale element ue krte  
// let x = document.querySelectorAll("h1");
// console.log(x);

//  to sleect by class
// let x = document.querySelectorAll(".yes");
// console.log(x);


// selecting lement and doing css type stuff color  
// let x = document.querySelector("h1");
// x.style.color="blue";
// x.style.fontFamily="Gill Sans";

// let y = document.querySelector("h2");
// y.style.backgroundColor= "pink";

// setTimeout(function(){
// y.innerHTML= "chnged text s";

// },2000)
 
// aise bhi jo kaam krna hai use {} inke bick main daalke rkh do jyada sochna nhi padega 
// setTimeout(function(){
//     let y = document.querySelector("h2");
// y.style.backgroundColor= "pink";

// },3000)




// --------------event listeners ------------
//  click se , hover effect se , ye mouse ko elememt se bahar kr dun tab kya hoga wagera kaam 

//  using id selector  adn adding event listener 
let x = document.getElementById("ele 1");
x.addEventListener("click " /* click ke jaagh kya kreneg wo likhna  */,function(){
x.style.color= "yellow";  
})

// example 2   ISMAIN HAM ELE 1 PE KRE MOUSE BUT CHANNEES JO HUE WO THIRD PE HUE SO WE CAN EVEN DO IT
y = document.getElementById("ele 2");
y.addEventListener("mouseenter" ,function(){
y.style.color= "blue";
y.style.backgroundColor= "green";  
})

y = document.getElementById("ele 2");
y.addEventListener("mouseleave" /* ye kre taki jaise hi mouse hata to chize change ho jaye ** but han koi spaces nhi dena hai idhar warna galat hoga **/ ,function(){
y.style.color= "black";
y.style.backgroundColor= "white";  
})

// IN SHORT FXN MAIN JO KRNA HAI USE LIKHO 





// note :
// to get hover like effect ki hover krne main kya chnages honge wo "mouseeneter" and "mouseleave" wale se krna hota 