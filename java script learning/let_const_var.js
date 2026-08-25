// let ko initialise nhi krna padta  and it cannt be redeclared but its values can be updtaed , a block scoped variable

//  var can be  redelcared and updated , var is global scoped thus not used mostly  

// const is used for constants and it must be initialised fist with some values and it cant be redeclared or updated , its a blocke scoped  varibale 


// type of "variable ka naam "
// ie :  
// let a = 19 ;
//  type of a ;







// let a= 10;
// a = 54 ; 
// console.log(a)
 const a= 10;        //now its a consatnt and we cant changhe it ;
a = 54 ; 
console.log(a)


//js main line by line compile hota to jismain error hai wo bas nhi chlega uske age , usse phle ka run hoga uske baad nhi hoga kuch  

let p = 27 ; 
console.log(a);
// normally let hi liya jata hai then *var*

var d= 34 ; 
var d = 35;
// in var redefination is allowed here but not in cpp, or other , but you cant redefine it to "const";  
// const d = 45;// eror



//                              /* ------- operators -------*/
// let q = 12;
// let e= 5; 
// console.log(q/e);


// // ** matlb power a **b mtlb a ki power b ; 


                             /* ------- datatypes -------*/

                             a= 32; 
                             b = 3.14;
                             u="ajksjas";
                             v='bdbd';
                             f=true;
console.log(a, typeof (a));   // *,*matlb space dega  
console.log(b, typeof b);  // ye bhi chalta hai 
console.log(u , typeof (u));
console.log(v , typeof (v));
console.log(f, typeof (f));

// matlb " " and ' ' ye dono hi string hote hai and sare int float wagera numbers

// * === ye jo hoat hai ye tyoe ko bhi compare kr deta apne aap like 5 != '5' ye is main false dega as dono ka type alag hai *----------




            //   -----   loops  --------
            for (i = 0 ; i <10 ; i++){
                console.log(i);
            }


            let i = 0 ; 
            while(i <10){
                console.log(i );
                i++
            }


            // same for do while sntax
