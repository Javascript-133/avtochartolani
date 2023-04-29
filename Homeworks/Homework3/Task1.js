let numbers =[1,2,3,4,5,6,7,8,9,10]

let NonEvenNunmbers = numbers.filter(i => {
    if (i % 2 === 1) {
        return true
    }
    return false
});

console.log(NonEvenNunmbers); 
 
// შედეგი = [ 1, 3, 5, 7, 9 ]
