//შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრიქონი ცარიელი ანუ ==> ''
// <== ეს ცარიელია, ხოლო ეს 'abc' <== არ არის ცარიელი

function isStringEmpty(str) {
  return str.trim().length === 0;
}

console.log("არის სტრინგი ცარიელი?: " + isStringEmpty("gfhfghf"));
