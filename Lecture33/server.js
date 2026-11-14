const bcrypt=require('bcrypt');


const password="Bob@123";
const password2="Bob@123";

const salt=bcrypt.genSaltSync(10);
console.log(salt);
const hash=bcrypt.hash(password,salt).then((hash)=>{
    console.log(hash);  
});
console.log(hash);{}