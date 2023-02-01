let score = prompt("რა მივიღ გამოცდაზე?");

if(score >= 85 && score <= 100) {
    console.log("ბებიას გაუხარდა!");
}
else if(score >= 50 && score < 85){
    console.log("ბებია მეტს ელოდა");
}
else if(score < 50){
    console.log("ბებიას ეწყინა");
}else {
    console.log("არასწორი მონაცემია შეყვანილი");
}