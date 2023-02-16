// //შექმენით ფუნქცია, რომელიც ჩვენთვის სასურველ ელემენტს გამოიტანს მასივიდან მაგ myfunc([4,2,8,9], 3) => 8

const numbers = [12, 14, 15, 113, 206];

function logValue(arr, x) {
  if (arr.includes(x)) {
    console.log(x + " მოიძებნა");
  } else {
    console.log(`ვერ მოიძებნა`);
  }
}

logValue(numbers, 15);
logValue(numbers, 42);
