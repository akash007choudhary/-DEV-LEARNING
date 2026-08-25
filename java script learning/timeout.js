function hel(){
    console.log("hello");
}
function mel(){
    console.log("meloo");
}
// 1st fxn ka naam pass hoga then uska time as sec* 1000 ke format main 
// and time jo lagta hai wo run button dabane ke baadka time hai 

// setTimeout(hel,5000);
// setTimeout(mel,2000); 
// // synatx is one more if the fxn are small
// setTimeout(function(){

//     // jo bhi chota sa fxn ho use yahan kaam ko likh skte 
// },n*1000)
 // qns: print 1 to n but with a gap of 1 sec after each numhber gets printed :

 // timer hai ye jab ham kabhi timer chhiye to ise use kreneegwe
//  for ( let i = 0;i<10;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i *1000)     // matlb phle 0 ke lie 0 sec 1 ka 1 sec then 2 sec wagera 

//  }



// for reverse main print lrne ko 
//  for ( let i = 0;i<10;i++){
//     setTimeout(function(){
//         console.log(i);
//     },(10-i) *1000) 
// }
// 2nd type 





 for ( let i = 10;i>=0;i--){
    setTimeout(function(){   // ye bhi callback hai 
        console.log(i);
    },i *1000)     // ise corect krne ko 11- i krna paedag 
}

//  ye kay kreag u ll think ki reverse main print krega bbut krta nhi hai as bhalle phle 10 pass hua but uska time bhi to 10 * 1000 hai jabki 9 ka 9 *1000 and 1 ka 1*1000 to jiska time kam ahi whai phle print hoga na so isiliye nhi hua revers emain print ye uper wala code 
//  isiliye uper wala tarika apnaye 
//  yato also you can do liek normal loop i se hi jayega but time n - i kr do 