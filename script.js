const secret = "codebar";

let guess = prompt("Enter the code for access to this page");
while (guess !== secret) {
    guess = prompt("Wrong code. Try again.");
}