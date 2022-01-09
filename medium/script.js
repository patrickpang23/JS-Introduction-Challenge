// islower and isupper is needed

var speaking = prompt(" What would you like to say today? ");

if (speaking === speaking.toLowerCase()) {
  console.log(" Speaker is whispering ");
}
else if (speaking === speaking.toUpperCase()) {
  console.log(" Speaker is shouting ");
}
else {
  console.log(" Speaker is talking normally ");
}
