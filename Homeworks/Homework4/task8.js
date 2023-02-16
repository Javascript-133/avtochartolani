//შექმენით ფუნქცია, რომელიც მალავს ემაილს არაავტორიზირებული წვდომისგან თავის დასაცავად მაგ.
//giorgi.beridze@gmail.com ==> giorgi.....@gmail.com (რამდენსაც დამალავთ იმდენი
//წერტილი უნდა იყოს ანუ .beridze-ის ზომა ტოლია 8-ის ანუ საჭიროა 8 წერტილი)

function hideEmail(email) {
  const atIndex = email.indexOf("@");
  const firstPart = email.slice(0, atIndex - atIndex / 2);
  const secondPart = email.slice(atIndex);
  return firstPart + "...." + secondPart;
}

const x = "avtochartolani@gmail.com";

console.log(hideEmail(x));

// რამდენი წერტილიცაა იმდენს ვერ ვაკეთებ.
