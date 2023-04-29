//შექმენით ფუნქცია, რომელიც გადაიყვანს სტრიქონული ტიპის მონაცემს,
//მასივში გამოყოფილს სფეისებით ==> hello here my dear ==> ["hello", "here", "my", "dear"]

function sentenceToArray(sentence) {
  var words = sentence.split(" ");
  return words;
}

const x = "hello here my dear";
console.log(sentenceToArray(x));
