function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  return console.log(string.toUpperCase())
}

 logShout("hello")
 
 function logWhisper(string) {
   return console.log(string.toLowerCase())
 }
 
 logWhisper("hello")
 
 function sayHiToGrandma(string) {
   if (string === string.toLowerCase()) return "I can hear you!";
   
 }