let ingredients = {
    sausage: {
        // weight: 10,
        price: 20
    },
    tomato: {
        price: 5
    }
};
let summ = 0;

function calculate(action, ingredientId) {
    let ingredient = ingredients[ingredientId] // ingredients.sausage === ingredients['sausage']
    if (action === 'plus') {
        summ = summ + ingredient.price
    } else {
        summ -= ingredient.price
    }
    document.getElementById('summ').innerHTML = summ;
}
window.onload = function() {
    const pluses = document.querySelectorAll('.plus');
    const minuses = document.querySelectorAll('.minus');
    const fun = element => {
        const parent = element.parentElement;
        element.onclick = () => calculate(element.className, parent.id);
    }
    pluses.forEach(fun)
    minuses.forEach(fun)
}