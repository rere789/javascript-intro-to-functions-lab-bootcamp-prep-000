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
   if (string === string.toLowerCase()) return "I can't hear you!";
   if (string === string.toUpperCase()) return "YES INDEED!";
   if(string === string("I love you, Grandma")) return "I Love you too"
   
   
 }