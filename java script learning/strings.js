// let s = "akash chodhary "
// console.log(s, s.length)  // space bhi included 
// console.log(s[0]);    // aise index bhi acces kr skjte 
// // for each loop does nt work for strings
// console.log ( s );



            // //    ----- built in fxns ------  \
            // console.log(s.toUpperCase())  
            // // isak matlb actuall string main no changes 
            // let s2= s.toUpperCase();
            // console.log(s2);  //  ye kar skte 


            /*
            -->> trim front aur back ke spaces kaat dega mid ke nhi 
            -->> is sab fxn se main string main no changes 
            -->> s.indexof('a')   ye index return krta   *** ye bas first wala deta hai if sameletter bahut se hai to bas first wala iondex return 
            >> you can use lastindexof ye last wala index return krta hai 

            &**********-->>>console.log(s.slice(a,b));
            ye index a se (b-1) tak ka string return kr deta hai 
            
            

            --->>> split fxnn 
            let s = " akssh is a good boy";
            let arr = s.split(' '); //>> matlb spaces main split
            console.log(arr); 


             ye dedega array 
            */



            //    templaet literalsss
// let a = `akash choudhary `
// console.log(a);

// this is called template literals we can even write variables inside this as 
let b = 4
let as = "akash"

let output= `the ${b} number member is now the name ${as}`
console.log(output);




// strings are immutagble means no change in the original string 
 