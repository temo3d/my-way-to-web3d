/*const pow = (x, base = 2) => {
    return x ** base;
};
console.log(pow(3)); // 9
console.log(pow(3, 3)); // 27*/
const getHiddenCard = (card, number = 4) => {
    return '*'.repeat(number) + `${card[12]}${card[13]}${card[14]}${card[15]}`
};