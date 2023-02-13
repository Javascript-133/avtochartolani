// 2. შექმენით ფუნქცია, რომელიც მოახდენს მასივის მიმატებას, მაგ. გვაქვს [1,2,3] და [4,5] => [1,2,3,4,5]

const numbers = [11,12,14,22,24,50]
const otherNumbers = [3,4,5,6]

const sumOfNumbers = numbers.concat(otherNumbers)

console.log(sumOfNumbers);

// შედეგი [  11, 12, 14, 22, 24, 50,  3,  4,  5,  6 ] 