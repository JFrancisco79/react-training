/*Scenario:
    Your teamate ask you to buy dinner for him. 
    His first choice is Fried Chicken. 
    If there no Fried chicken, Burger and Fries will be fine.
    If the two in unavailable, buy him a Ceasar Salad.
*/
const log = console.log;
let firstOption = 'Fried Chicken',
    secondOption = 'Burger and Fries',
    thirdOption = 'Ceasar Salad';

let finalOrder;

// Using IF
if (firstOption) finalOrder = firstOption;
else if (secondOption) finalOrder = secondOption;
else finalOrder = thirdOption;

log(finalOrder);

//Using Ternary Expression
finalOrder = firstOption
    ? firstOption
    : secondOption
    ? secondOption
    : thirdOption;
log(finalOrder);

//Using Short Circuit
finalOrder = firstOption || secondOption || thirdOption;
log(finalOrder);
