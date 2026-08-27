const { faker } = require('@faker-js/faker');
// first way to connect to sql; 

const mysql=require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'akash'
});

let  createRandomUser=() =>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
     faker.internet.email(),
    faker.internet.password(),
    
]  ;
}


let q = "INSERT INTO user (id ,username,email,password) VALUES ? ";

// each time user main alkag alag daal ke run krenge as jo phle dale hinge wo alredy ja chyuka hoga database main 

// let user =[["123j","123_newjuser","newuser@gjmail.com","akjash"],["123g","123_newuserhj","newuser@gmail.comj","akashjk"]];


let data = [];

for(let i = 0 ;i<=100;i++){
   data.push(createRandomUser());
}
try{
connection.query(q,[data],(err,result)=>{
    if(err) throw err;
    console.log(result);
});
}catch(err){
console.log(err)
}



connection.end();
















//                         **2nd way to connect to sql 

// to aces mysqlo on the cli type this command and type password thenm youl acces the workbench like from cli 
// & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p



// ANOTEHR METHOD TO USE SQL IS MAKING A FILE OF .SQL AND THEN CLI MAIN JAKE 
// source filename.sql
// krke use krdenge execute the file  