const bcrypt=require('bcrypt');


const password="Bob@123";

const salt=bcrypt.genSaltSync(10);

const hash=bcrypt.hashSync(password,salt);