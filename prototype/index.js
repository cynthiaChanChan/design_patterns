var Shopper = require("./Shopper");

var cindy = new Shopper("Cindy");
cindy.addItemToList("camping knife");
cindy.addItemToList("tent");
cindy.addItemToList("backpack");
cindy.addItemToList("map");
cindy.addItemToList("slingshot");

var angela = new Shopper("Angela");
angela.addItemToList("camping knife");
angela.addItemToList("tent");
angela.addItemToList("backpack");
angela.addItemToList("map");
angela.addItemToList("reading light");

console.log(`${cindy.name}: ${cindy.shoppingList}`);
console.log(`${angela.name}: ${angela.shoppingList}`);
