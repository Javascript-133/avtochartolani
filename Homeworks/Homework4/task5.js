//შექმენით ფუნქცია, რომელიც მასივში არსებულ ყველაზე მეტად განმეორებად ელემენტს გამოიტანს ეკრანზე და თან
//დაითვლის თუ რამდენჯერ განმეორდა ეს ელემენტი ==> [4,3,2,4,5,4,7,8,9] ==> most frequent: 4, count: 3

function mostFrequent(arr) {
  let mostFrequentElement = 0;
  let max = 0;

  arr.forEach((element, index) => {
    let frequency = 1;

    for (let i = index + 1; i < arr.length; i++) {
      if (arr[i] === element) {
        frequency++;
      }
    }

    if (frequency > max) {
      mostFrequentElement = element;
      max = frequency;
    }
  });

  console.log("ყველაზე ხშირია: ", mostFrequentElement, "გვხდება: " + max + "-ჯერ");
}

mostFrequent([1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 8, 8, 8, 8]);
