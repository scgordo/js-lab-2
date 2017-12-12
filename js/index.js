var myAge = prompt("How old are you?");
var myName = prompt("What is your name?");
console.log("age = " + myAge);
console.log("name = " + myName);

if (myAge <= 12) {
  alert("Sorry, " + myName + "! You are not old enough to enter.")
}
else if (myAge <= 20) {
  alert("You are allowed in with limited access, " + myName + ".");
  confirm("Are you REALLY sure you wish to enter? You might be scared!");
}
  else {
    alert("Congratulations, " + myName + "! You are old enough to enter!");
    var isNaive = confirm("Please give us $100 to continue to this website");
    if (isNaive == true) {
      alert("My PayPal email address is givememoney@gmail.com");
    }
    else {
      alert("I was just kidding. Come on in.");
    }
  }