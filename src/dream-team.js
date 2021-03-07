const CustomError = require("../extensions/custom-error");


module.exports = function createDreamTeam(team) {

return team
.sort()
.map(item => item.slice(0, 1).toUpperCase())
.join("");
};
