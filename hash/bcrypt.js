const bcrypt = require("bcrypt");

const password = "123";

//const hashed = bcrypt.hashSync(password, "$2b$12$/stdxacMgXNSrtgEDDiFGu");
const hashed = bcrypt.hashSync(password, 12);
console.log(hashed);
// hashed:$2b$12$HXUxFoV9sMDJZPEwnuv2G.2ya.GFSmURlMDdfGmwcZNpEusTaBZTC
// hashed:$2b$12$PB5T1xl3Ecroo10iYSVC9en4ARbPoQ8ttv2sjqyZR2KI1m/smNLsG

// const salt = bcrypt.genSaltSync(12);
// console.log(salt);
// salt:$2b$12$/stdxacMgXNSrtgEDDiFGu 盐是明文存储的
//hashed:$2b$12$/stdxacMgXNSrtgEDDiFGu dTzVkPmnCbntXxoJGgULYBXAK5MC6mu
