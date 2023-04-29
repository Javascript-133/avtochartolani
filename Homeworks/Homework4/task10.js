//შექმენით ფუნქცია, რომელიც მომხმარებლის მიერ მიწოდებულ წინადადებაში მისთვის
//სასურველ სიტყვას შეატრიალებს და ისე დააბრუნებს
//მაგ. myfunc("Hello How Are You", 2) ==> "Hello woH Are You"

function rotateWord(sentence, x) {
  const words = sentence.split(" ");
  const wordToRotate = words[x];
  const rotatedWord =
    wordToRotate.slice(-1) + wordToRotate.slice(1, -1) + wordToRotate[0];
  words[x] = rotatedWord;
  return words.join(" ");
}

console.log(rotateWord("Hello How Are You", 1));
