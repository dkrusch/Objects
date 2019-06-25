const prissy = {
    name: "Prissy",
    age: 8,
    species: "Dachshund",
    nicknames: ["fiend", "fiend demon", "fiendshund", "cuteshund", "creep", "lazeshund", "rollshund"]
}

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    }
}

const chickenComboMeal = {
    sandwichType: "chicken", 
    fries: "true", 
    drinkSize: "medium"
}

const chickenMeal = {
    sandwichType: "chicken", 
    fries: "false", 
    drinkSize: "small"
}

const burgerComboMeal = {
    sandwichType: "burger", 
    fries: "true", 
    drinkSize: "large"
}

const burgerMeal = {
    sandwichType: "burger", 
    fries: "false", 
    drinkSize: "small"
}
// Place an order
restaurant.placeOrder(burgerMeal);
restaurant.placeOrder(burgerComboMeal);
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(chickenMeal);
restaurant.placeOrder(chickenMeal);


// Invoke the function to return the list of all orders
const getOrders = function ()
{
    return(restaurant.orders);
}

for (let i = 0; i < 20; i++)
{
    console.log("I like to count", i);
}

// Output all orders to the console using console.table()
console.table(getOrders());