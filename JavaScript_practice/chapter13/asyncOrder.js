function breakfastOrder(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${item} is ready. `);
        }, 3000); //3000 means 3 seconds
    });    
}

async function Order(item) {
    const order = await breakfastOrder(item); // it will work after 3 seconds
    console.log(order);
    
}
Order("Omelette");
Order("Coffee");
Order("Bread");