//შექმენით ფუნქცია, რომელიც მასივის გადაიყავნს სტრიქონში და შემდეგ დაალაგებს ამ სტრიქონს ზრდადობის მიხედვით მაგ 
//['blue', 'red', 'green'] => blueredgreen =(ეს უნდა დასორტირდეს ანბანის ზრდადობით)=> ანბანის ზრდადობით სორტირებული (აქ).


// const unsortedNumbers = [5,3,2,4,1,7]

// const ascSortedNumbers = unsortedNumbers.sort((a,b) => a - b);
// // const descSortedNumbers = unsortedNumbers.sort((a,b) => b - a);
// console.log(ascSortedNumbers);
// // console.log(descSortedNumbers);



const colors = ['blue', 'red', 'green', 'yellow', 'black', 'white']; 
const sortedcolors = colors.slice(0,6);

const sortedcolorsbyab = sortedcolors.sort((a,b) => a -b);

console.log(sortedcolorsbyab);


//ვერ ვხვდები რა მეშლება :( :D 