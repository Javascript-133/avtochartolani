//შექმენით ფუნქცია, რომელიც ამოწმებს მთავრდება თუ არა კონკრეტული სტრიქონის ბოლო
//სიტყვა მომხმარებლის მიერ მითითებული სუფიქსით მაგ.
//myfunc("I like Javascript Programming", "ing") ==> თუ ბოლოვდება დააბრუნებს
//True, თუ არ ბოლოვდება დააბრუნებს False

function endSuffix(sentence, suffix) {
  return sentence.endsWith(suffix);
}

// Example usage
console.log(endSuffix("I like Javascript Programming", "ing"));
