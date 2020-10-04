var scout_prototype = require("./scout_prototype");

var cindy = scout_prototype.clone();
cindy.name = "Cindy";
cindy.addItemToList("slingshot");

var angela = scout_prototype.clone();
angela.name = "Angela";
angela.addItemToList("reading light");

console.log(`${cindy.name}: ${cindy.shoppingList}`);
console.log(`${angela.name}: ${angela.shoppingList}`);
