const CustomError = require("../extensions/custom-error");


module.exports = function createDreamTeam(team) {
 if (!Array.isArray(team)) return false;
return team
.toString()
.replace(/\s/g, '')
.replace(/[0-9]/g, '')
.replace(',,', ',')
.replace('[','')
.split(',')
.sort()
.map((word)=>word[0]).join('')
.toUpperCase()
};
