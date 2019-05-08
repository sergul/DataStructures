const customers = {
    walmart: {
        products: [{
            price: 200,
            category: 'A'
        }, {
            price: 400,
            category: 'B'
        }]
    },

    target: {
        productGroups: [{
            group1: [{
                products: [{
                    price: 300,
                    category: 'A'
                }]
            }]
        }]
    }
}

const sumPrices = (data) => {
    if ('products' in data && Array.isArray(data.products)) {
        const sum = data.products.reduce((prev, current) => prev + current.price, 0);
        return sum;
    }
    let sumPrice = 0;
    for (let subObject of Object.values(data)) {
        sumPrice += sumPrices(subObject);
    }
    return sumPrice;
}

console.log(sumPrices(customers));
